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
        if(other instanceof  Bullet){ // handle bullet collection
            console.log("Bullet Hit!");
            this.agent.health -= other.damage;
            Game.GameObjects = Game.GameObjects.filter((el)=>{ !other}); // remove bullet
            Game.GameObjects = Game.GameObjects.filter((el)=>{ !this}); // remove self
        }
    }
}