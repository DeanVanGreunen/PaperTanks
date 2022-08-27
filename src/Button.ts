import StateMachine from "./StateMachine";

export default class Button {
    font:any; // font to use
    color:any; // color for text
    hover_color:any; // color for text when hovered
    background:any; // background color
    hover_background:any; // cbackground color when hovered
    text:any; // button text
    border:any; // button border color
    hover_border:any; // button border color
    size:any;
    x:number;
    y:number;
    w:number;
    h:number;

    onclick:any;
    
    public init(){

    }

    public update(delta:number, stateMachine: StateMachine){
        console.log('update button');
    }

    public render(canvas:any){
        let x = this.x + (canvas.width / 2) - (this.w / 2);
        let y = this.y + (canvas.height / 2) - (this.h / 2);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = this.border;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + this.h);
        ctx.lineTo(x + this.w, y + this.h);
        ctx.lineTo(x + this.w, y);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${this.size} ${this.font}`;
        ctx.fillText(this.text, this.x, this.y);
        console.log('render button text');
    }
}