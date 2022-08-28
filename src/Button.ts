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

    onclick:any = ()=>{/* do noting*/};

    isHover:boolean = false;
    
    constructor(){        
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public init(){

    }

    public update(delta:number){
        // align button by center pivot
        let m_x = StateMachine.mouse_x;
        let m_y = StateMachine.mouse_y;
        // check if hover
        this.isHover = (m_x >= this.x) && (m_y >= this.y) && (m_x <= this.x + this.w) && (m_y <= this.y + this.h);
        // if hover and mouse down
        if(this.isHover && StateMachine.mouse_down){
            // reset mouse down
            StateMachine.mouse_down = false;
            // invoke onclick function
            this.onclick();
        }
    }

    public render(){     
        let ctx = StateMachine.canvas.getContext("2d");
        // render border
        ctx.strokeStyle = !this.isHover ? this.border : this.hover_border;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x , this.y + this.h);
        ctx.lineTo(this.x + this.w , this.y + this.h);
        ctx.lineTo(this.x + this.w , this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        // render text
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `normal ${this.size} ${this.font}`;
        ctx.fillStyle = !this.isHover ? this.color : this.hover_color;
        ctx.fillText(this.text,this.x + (this.w / 2), this.y + (this.h / 2));        
    }
}