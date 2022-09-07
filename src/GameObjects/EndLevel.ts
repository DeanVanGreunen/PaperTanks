import GameObject from "../GameObjects";
import Game from "../States/Game";
import StateMachine from "../StateMachine";
import Tank from "./Tank";
import PlayerAgent from "../Agents/PlayerAgent";
import Level from "../Level";
import Credits from "../States/Credits";

export default class EndLevel extends GameObject {
    x:number;
    y:number;
    w:number;
    h:number;

    constructor(x:number, y:number, w:number, h:number){
        super();
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public async init(){
    }

    public async update(delta:number){
    }

    public render(game:Game){
        let ctx = StateMachine.canvas.getContext("2d");
        // box
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#359225';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.lineTo(this.x + this.w, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        // line 1
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#359225';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.stroke();
        // line 2
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#359225';
        ctx.moveTo(this.x + this.w, this.y);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.stroke();
    }
    public async onCollision(other:GameObject){
        let isoverLap = // fixed overlapping
            (this.x < other.x + other.w) &&
            (this.x + this.w > other.x ) &&
            (this.y < other.y + other.h) &&
            (this.y + this.h > other.y);
        if(!isoverLap) return;
        if(other instanceof Tank){ // handle bullet collection
            if(other.agent instanceof PlayerAgent){
                let enemiesLeft = Game.GameObjects.filter((go)=>{
                    return (go instanceof Tank) && !(go.agent instanceof PlayerAgent);
                }).length;
                if(enemiesLeft == 0){ // move to next level, else go to credits                    
                    const music = new Audio('assets/audio/teleport.wav');
                    music.loop = false;
                    music.volume = 0.25;
                    music.playbackRate = 0.9;
                    music.play();
                    let next = Level.getNextLevel(Game.NextLevelFrom);
                    if(!Level.doesExist(next)){
                        StateMachine.states.pop();
                        let state = new Credits();
                        await state.init();
                        StateMachine.states.push(state);
                    } else {
                        Game.GameObjects = Level.getLevel(next);
                        Game.NextLevelFrom = next;
                        StateMachine.states.pop();
                        let state = new Game();
                        await state.init();
                        StateMachine.states.push(state);
                    }
                }
            }
        }
    }    
}

(global as any).EndLevel = EndLevel;