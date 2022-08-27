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
    n_x:number;
    n_y:number;

    onclick:any;

    isHover:boolean = false;
    
    constructor(){        
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public init(){

    }

    public update(delta:number, stateMachine: StateMachine){
        // align button by center pivot
        this.n_x = (stateMachine.canvas.width / 2) + this.x - (this.w / 2);
        this.n_y = (stateMachine.canvas.height / 2) + this.y - (this.h / 2);
        let m_x = StateMachine.mouse_x;
        let m_y = StateMachine.mouse_y;
        // check if hover
        this.isHover = ( m_x >= this.x) && (m_y >= this.y) && (m_x <= this.x + this.w) && (m_y <= this.y + this.h);
    }

    public render(canvas:any){     
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `normal ${this.size} ${this.font}`;
        ctx.fillStyle = !this.isHover ? this.color : this.hover_color;
        ctx.fillText(this.text,this.n_x, this.n_y);        
    }
}