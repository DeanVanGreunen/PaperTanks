import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import Bullet from "./Bullet";
import StateMachine from "../StateMachine";
import PlayerAgent from "../Agents/PlayerAgent";

export default class Tank extends GameObject {
    agent:IAgent;
    renderer:ITankRender;
    health:number = 100;
    constructor(agent:IAgent, renderer:ITankRender, health:number){
        super();
        this.agent = agent;
        this.renderer = renderer;
        this.health = health;
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public async init(){
    }

    public async update(delta:number){
        this.agent.update(delta, this);
    }

    public render(game:Game){
        this.renderer.render(this);
        this.agent.render(this);
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
                if(this.health <= 0){
                    this.mustDelete = true;
                }
                this.health -= other.damage;
                Game.score += 10;
            }
        }
    }
}