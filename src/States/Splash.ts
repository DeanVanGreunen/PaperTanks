import IState from "../IState";
import StateMachine from "../StateMachine";
import MainMenu from "./MainMenu";

export default class Splash extends IState {
    logo:any;
    counter:number = 255;   
    switch:boolean = false; 
    constructor(){
        super();
    }

    public init(){
        return (new Promise((resolve, reject)=>{
            this.logo = new Image();
            this.logo.src = 'assets/images/logo.png';
            this.logo.onload = () => {
                resolve(true);
            };
        }));
    }

    public async update(delta:number, stateMachine: StateMachine){
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
                stateMachine.states.pop();
                stateMachine.states.push(state);
                //TODO: add menu state here
            }    
        }
    }

    public render(canvas:any){
        let ctx = canvas.getContext("2d");
        let x = (canvas.width / 2) - ( this.logo.width / 2);
        let y = (canvas.height / 2) - ( this.logo.height / 2);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.logo, 0, 0, this.logo.width, this.logo.height, x, y, this.logo.width, this.logo.height);
        
        ctx.fillStyle = `rgba(229,229,229, ${this.counter / 225})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}