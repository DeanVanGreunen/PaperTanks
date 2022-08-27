import IState from "../IState";
import StateMachine from "../StateMachine";

export default class Splash extends IState {
    logo:any;
    counter:number = 255;    
    constructor(){
        super();
    }

    public init(){
        return (new Promise((resolve, reject)=>{
            this.logo = new Image();
            this.logo.src = 'assets/logo.png';
            this.logo.onload = () => {
                resolve(true);
            };
        }));
    }

    public update(delta:number, stateMachine: StateMachine){
        this.counter -= delta * 10;
        if(this.counter <= 0){
            stateMachine.states.pop();
            //TODO: add menu state here
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