import IState from "../IState";
import StateMachine from "../StateMachine";
import MainMenu from "./MainMenu";
import Splash from "./Splash";

export default class Credits extends IState {
    counter:number = -64 * 3;
    spacing:number = 64;
    total_count:number = 2;
    constructor(){
        super();
    }

    public init(){
    }

    public async update(delta:number){
        this.counter += delta * 4;
        if(this.counter >= this.spacing * this.total_count){
            StateMachine.states = [];
            let splash = new Splash();
            await splash.init();
            StateMachine.states.push(splash);
        }
    }

    public render(){
        let ctx = StateMachine.canvas.getContext("2d");
        let x = (StateMachine.canvas.width / 2);
        ctx.imageSmoothingEnabled = false;
        
        // draw grid here #58aff3
        for(let i=0;i<40;i++){
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = '#58aff3';
            ctx.moveTo(0, i * 12);
            ctx.lineTo(StateMachine.canvas.width, i * 12);
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = `rgba(225, 0, 0, 1)`;
        ctx.moveTo(24, 0);
        ctx.lineTo(24, StateMachine.canvas.height);
        ctx.stroke();

        // render names and tools here, with copyright notice
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `normal 28px PencilRegular`;
        ctx.fillStyle = "#363636";

        ctx.fillText("Produced By: Dean Van Greunen",x, (this.spacing * 1) - this.counter);
        ctx.fillText("Developed By: Dean Van Greunen",x, (this.spacing * 2) - this.counter);
        ctx.fillText("Designer By: Dean Van Greunen",x, (this.spacing * 3) - this.counter);
        ctx.fillText(`Copyright By Dean Van Greunen. All Rights Reserved`,x, (this.spacing * 4) - this.counter);
    }
}