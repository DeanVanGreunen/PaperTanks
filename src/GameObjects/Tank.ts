import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";

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
    }
}