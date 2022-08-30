import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import Bullet from "./Bullet";
import StateMachine from "../StateMachine";
import PlayerAgent from "../Agents/PlayerAgent";
import GameOver from "../States/GameOver";

export default class Tank extends GameObject {
    agent:IAgent;
    renderer:ITankRender;
    health:number = 100;
    constructor(agent:IAgent, renderer:ITankRender, health:number){
        super();
        this.health = health;
        this.agent = agent;
        this.renderer = renderer;
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public async init(){
    }

    public async update(delta:number){
        this.agent?.update(delta, this);
    }

    public render(game:Game){
        this.renderer?.render(this);
        this.agent?.render(this);
    }

    public onCollision(other:GameObject){
        let isoverLap = // fixed overlapping
            (this.x < other.x + other.w) &&
            (this.x + this.w > other.x ) &&
            (this.y < other.y + other.h) &&
            (this.y + this.h > other.y);
        if(other instanceof Bullet){ // handle bullet collection
            if(isoverLap){
                other.mustDelete = true;
                this.health -= other.damage;
                if(this.agent instanceof PlayerAgent === false){
                    Game.score += 10;
                } else if(this.agent instanceof PlayerAgent){
                    if(this.health <= 0){
                        Game.GameObjects = []; // clear game
                        StateMachine.states.pop()
                        let state = new GameOver(); // show gameover menu
                        state.init(); // init
                        StateMachine.states.push(state) // add to stack
                    }
                }    
                if(this.health <= 0){
                    this.mustDelete = true;
                    this.health = 0;
                }                
            }
        }
    }
}