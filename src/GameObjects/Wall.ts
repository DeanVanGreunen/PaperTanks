import GameObject from "../GameObjects";
import IAgent from "../Agents/IAgent";
import Game from "../States/Game";
import ITankRender from "../Tanks/ITankRender";
import StateMachine from "../StateMachine";
import Tank from "./Tank";
import Bullet from "./Bullet";
import MathF from "../MathF";

export default class Wall extends GameObject {
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
        ctx.strokeStyle = '#363636';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.lineTo(this.x + this.w, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        // line 1
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#363636';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.w, this.y + this.h);
        ctx.stroke();
        // line 2
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#363636';
        ctx.moveTo(this.x + this.w, this.y);
        ctx.lineTo(this.x, this.y + this.h);
        ctx.stroke();
    }

    public onCollision(other:GameObject){
        let isoverLap = // fixed overlapping
            (this.x < other.x + other.w) &&
            (this.x + this.w > other.x ) &&
            (this.y < other.y + other.h) &&
            (this.y + this.h > other.y);
        if(other instanceof Bullet){ // handle Tank collection
            if(isoverLap){
                // bounce bullets against the wall
                other.vx *= -1;
                other.vy *= -1;
                const music = new Audio('assets/audio/bounce.wav');
                music.loop = false;
                music.volume = 0.10;
                music.playbackRate = 1;
                music.play();
            }
        }
    }
    
}


(global as any).Wall = Wall;