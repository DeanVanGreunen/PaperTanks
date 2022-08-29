import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import Bullet from "./Bullet";
import StateMachine from "../StateMachine";

export default class Tank extends GameObject {
    agent:IAgent;
    renderer:ITankRender;
    constructor(agent:IAgent, renderer:ITankRender){
        super();
        this.agent = agent;
        this.renderer = renderer;
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
        let isoverLap = false;
        if(other instanceof  Bullet){ // handle bullet collection
            isoverLap = 
                other.x >= this.agent.x &&
                other.y >= this.agent.y &&
                other.y + other.r <= this.agent.x + this.agent.w &&
                other.y + other.r <= this.agent.y + this.agent.h;
            if(isoverLap){
                this.agent.health -= other.damage;
                other.mustDelete = true;
                if(this.agent.health <= 0){
                    this.mustDelete = true;
                }
            }
        }
    }
}