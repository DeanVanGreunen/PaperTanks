import GameObject from "../GameObjects";
import Game from "../States/Game";
import StateMachine from "../StateMachine";
import Tank from "./Tank";
import PlayerAgent from "../Agents/PlayerAgent";
import Level from "../Level";
import Credits from "../States/Credits";

export default class Heart extends GameObject {
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
        // heart
        let fromx = this.x;
        let fromy = this.y;
        let tox = this.x + this.w;
        let toy = this.y + this.h;
        let lw = 15;
        let hlen = 15;
        let color = "#cc0707";
        var x = fromx;
        var y = fromy;
        var width = lw ;
        var height = hlen;
        
        ctx.save();
        ctx.beginPath();
        var topCurveHeight = height * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        // top left curve
        ctx.bezierCurveTo(
            x, y, 
            x - width / 2, y, 
            x - width / 2, y + topCurveHeight
        );

        // bottom left curve
        ctx.bezierCurveTo(
            x - width / 2, y + (height + topCurveHeight) / 2, 
            x, y + (height + topCurveHeight) / 2, 
            x, y + height
        );

        // bottom right curve
        ctx.bezierCurveTo(
            x, y + (height + topCurveHeight) / 2, 
            x + width / 2, y + (height + topCurveHeight) / 2, 
            x + width / 2, y + topCurveHeight
        );

        // top right curve
        ctx.bezierCurveTo(
            x + width / 2, y, 
            x, y, 
            x, y + topCurveHeight
        );

        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();

    }
    public async onCollision(other:GameObject){
        let isoverLap = // fixed overlapping
            (this.x < other.x + other.w) &&
            (this.x + this.w > other.x ) &&
            (this.y < other.y + other.h) &&
            (this.y + this.h > other.y);
        if(!isoverLap) return;        
    }    
}

(global as any).Heart = Heart;