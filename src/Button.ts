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
    
    constructor(){        
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public init(){

    }

    public update(delta:number, stateMachine: StateMachine){
        console.log('update button');
    }

    public render(canvas:any){     
        let ctx = canvas.getContext("2d");
        ctx.font = `${this.size} normal ${this.font}`;
        ctx.fillText(this.text,0,0);
    }
}