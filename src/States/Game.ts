import IState from "../IState";
import GameObject from "../GameObjects";
import Tank from "../GameObjects/Tank";
import PlayerAgent from "./../Agents/PlayerAgent";
import BaseTank from "./../Tanks/BaseTank";
import StateMachine from "../StateMachine";
import FollowAgent from "../Agents/FollowAgent";

export default class Game extends IState {
    static GameObjects:GameObject[] = [];
    static health:number = 100;
    static score:number = 0;
    constructor(){
        super();

        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
        Game.GameObjects.push(new Tank(new PlayerAgent(0,0, 32, 32), new BaseTank(), 100));
        Game.GameObjects.push(new Tank(new FollowAgent(StateMachine.canvas.width/2,StateMachine.canvas.height/2, 32, 32), new BaseTank(), 50));
    }

    public static getPlayer(): Tank{
        let tanks = Game.GameObjects.filter((go)=> go instanceof Tank);
        let player = tanks.filter((tank)=> (tank as Tank).agent instanceof PlayerAgent)[0] as Tank;
        return player;
    }

    public async init(){
        for(let i=0;i<Game.GameObjects.length;i++){
            Game.GameObjects[i].init();
        }
    }

    public async update(delta:number){
        // check for collisions
        for(let i=0;i<Game.GameObjects.length;i++){
            for(let j=0;j<Game.GameObjects.length;j++){
                if(i !== j){
                    Game.GameObjects[i].onCollision(Game.GameObjects[j]);
                }
            }
        }
        // remove deleted items
        Game.GameObjects = Game.GameObjects.filter((go)=>{ return !go.mustDelete}); 
        
        // update
        for(let i=0;i<Game.GameObjects.length;i++){
            Game.GameObjects[i].update(delta, this); // update
            const G = Game.GameObjects[i];
            // remove from player field if off screen (bullets, ammo, etc)
            Game.GameObjects[i].mustDelete = (G.x <= 0) ||(G.x + G.w >= StateMachine.canvas.width) || (G.y <= 0) ||(G.y + G.h >= StateMachine.canvas.height);
        }        
    }

    public render(){        
        let ctx = StateMachine.canvas.getContext("2d");
        // draw grid here #58aff3
        for(let i=0;i<40;i++){
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = '#58aff3'; // 88, 175, 243
            ctx.moveTo(0, i * 12);
            ctx.lineTo(StateMachine.canvas.width, i * 12);
            ctx.stroke();
        }

        
        ctx.beginPath();
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = `rgba(225, 0, 0, 1)`;
        ctx.moveTo(24, 0);
        ctx.lineTo(24, StateMachine.canvas.height);
        ctx.stroke();

        for(let i=0;i<Game.GameObjects.length;i++){
            Game.GameObjects[i].render(this);
        }
    }
}