import IState from "../IState";
import StateMachine from "../StateMachine";
import MainMenu from "./MainMenu";

export default class ThankYou extends IState {
    thankyou:any;
    counter:number = 255;   
    constructor(){
        super();
    }

    public init(){
        return Promise.all([
            (new Promise((resolve, reject)=>{
                this.thankyou = new Image();
                this.thankyou.src = 'assets/images/thankyou.png';
                this.thankyou.onload = () => {
                    resolve(true);
                };
            })),
        ]);
    }

    public async update(delta:number){
        this.counter -= delta * 10;
        if(this.counter <= 0){
            this.counter = 0;
        }    
    }

    public render(){
        let ctx = StateMachine.canvas.getContext("2d");
        let x = (StateMachine.canvas.width / 2) - ( this.thankyou.width / 2);
        let y = (StateMachine.canvas.height / 2) - ( this.thankyou.height / 2);
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

        
        ctx.drawImage(this.thankyou, 0, 0, this.thankyou.width, this.thankyou.height, x, y, this.thankyou.width, this.thankyou.height);

        ctx.fillStyle = `rgba(229,229,229, ${this.counter / 225})`;
        ctx.fillRect(0, 0, StateMachine.canvas.width, StateMachine.canvas.height);

        if(this.counter > 0){
            // draw grid here #58aff3
            for(let i=0;i<40;i++){
                ctx.beginPath();
                ctx.lineWidth = 0.25;
                ctx.strokeStyle = `rgba(88, 175, 243, ${this.counter / 225})`;
                ctx.moveTo(0, i * 12);
                ctx.lineTo(StateMachine.canvas.width, i * 12);
                ctx.stroke();
            }
            
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = `rgba(225, 0, 0, ${this.counter / 225})`;
            ctx.moveTo(24, 0);
            ctx.lineTo(24, StateMachine.canvas.height);
            ctx.stroke();
        }
    }
}