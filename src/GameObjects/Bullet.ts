import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import StateMachine from "../StateMachine";

export default class Bullet extends GameObject {
    x:number;
    y:number;
    r:number;

    vx:number;
    vy:number;
    constructor(x:number, y:number, r:number, vx:number, vy:number){
        super();
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);

        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
    }

    public async init(){
    }

    public async update(delta:number){
        this.x += delta * this.vx;
        this.y += delta * this.vy;
    }

    public render(game:Game){
        let ctx = StateMachine.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 0.75;
        ctx.fillStyle = "rgba(225, 0, 0, 1)";
        ctx.strokeStyle = "rgba(225, 0, 0, 1)";
        ctx.stroke();
        //ctx.fill();
    }
}