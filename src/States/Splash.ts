import IState from "../IState";
import StateMachine from "../StateMachine";
import MainMenu from "./MainMenu";

export default class Splash extends IState {
    grid:any;
    logo:any;
    counter:number = 255;   
    switch:boolean = false; 
    constructor(){
        super();
    }

    public init(){
        return Promise.all([
            (new Promise((resolve, reject)=>{
                this.logo = new Image();
                this.logo.src = 'assets/images/logo.png';
                this.logo.onload = () => {
                    resolve(true);
                };
            })),
        ]);
    }

    public async update(delta:number){
        if(!this.switch){
            this.counter -= delta * 10;
            if(this.counter <= 0){
                this.switch = true;
            }    
        } else {
            this.counter += delta * 10;
            if(this.counter >= 255){
                let state = new MainMenu();
                await state.init();
                StateMachine.states.pop();
                StateMachine.states.push(state);
            }    
        }
    }

    public render(){
        let ctx = StateMachine.canvas.getContext("2d");
        let x = (StateMachine.canvas.width / 2) - ( this.logo.width / 2);
        let y = (StateMachine.canvas.height / 2) - ( this.logo.height / 2);
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

        
        ctx.drawImage(this.logo, 0, 0, this.logo.width, this.logo.height, x, y, this.logo.width, this.logo.height);

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