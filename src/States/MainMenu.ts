import IButton from "../IButton";
import IState from "../IState";
import StateMachine from "../StateMachine";

export default class MainMenu extends IState {
    game_name_logo:any;
    game_name_logo_x:number;
    game_name_logo_y:number;
    counter:number = 255;   
    switch:boolean = false; 
    showMenu:boolean = false;
    startButton:IButton;
    constructor(){
        super();
    }

    public init(){
        return (new Promise((resolve, reject)=>{
            this.game_name_logo = new Image();
            this.game_name_logo.src = 'assets/images/game_name_logo.png';
            this.game_name_logo.onload = () => {
                resolve(true);
            };
        }));
    }

    public update(delta:number, stateMachine: StateMachine){
        if(!this.showMenu){
            this.game_name_logo_x = (620 / 2) - ( this.game_name_logo.width / 2);
            this.game_name_logo_y = (480 / 2) - ( this.game_name_logo.height / 2);
            if(!this.switch){
                this.counter -= delta * 10;
                if(this.counter <= 0){
                    this.switch = true;
                }    
            } else {
                this.counter += delta * 10;
                if(this.counter >= 255){
                    this.showMenu = true;
                }    
            }  
        } else {
            // now move game logo up and display buttons, then fade back in
            this.game_name_logo_x = (620 / 2) - ( this.game_name_logo.width / 2);
            this.game_name_logo_y = 12;
            this.counter -= delta * 10;
            if(this.counter <= 0){
                this.counter = 0;
            }    
        }
    }

    public render(canvas:any){
        let ctx = canvas.getContext("2d");
        let x = (canvas.width / 2) - ( this.game_name_logo.width / 2);
        let y = (canvas.height / 2) - ( this.game_name_logo.height / 2);
        ctx.imageSmoothingEnabled = false;
        
        // draw grid here #58aff3
        for(let i=0;i<40;i++){
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = '#58aff3'; // 88, 175, 243
            ctx.moveTo(0, i * 12);
            ctx.lineTo(canvas.width, i * 12);
            ctx.stroke();
        }

        ctx.drawImage(this.game_name_logo, 0, 0, this.game_name_logo.width, this.game_name_logo.height, this.game_name_logo_x, this.game_name_logo_y, this.game_name_logo.width, this.game_name_logo.height);        
        if(this.showMenu){ // if enabled show menu buttons

        }
        // used for fading
        ctx.fillStyle = `rgba(229,229,229, ${this.counter / 225})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if(this.counter > 0){
            // draw grid here #58aff3
            for(let i=0;i<40;i++){
                ctx.beginPath();
                ctx.lineWidth = 0.25;
                ctx.strokeStyle = `rgba(88, 175, 243, ${this.counter / 225})`;
                ctx.moveTo(0, i * 12);
                ctx.lineTo(canvas.width, i * 12);
                ctx.stroke();
            }
        }
    }
}