import Button from "../Button";
import IState from "../IState";
import StateMachine from "../StateMachine";
import ThankYou from "./ThankYou";

export default class MainMenu extends IState {
    game_name_logo:any;
    game_name_logo_x:number;
    game_name_logo_y:number;
    counter:number = 255;   
    switch:boolean = false; 
    showMenu:boolean = false;
    startButton:Button;
    quitButton:Button;
    constructor(){
        super();

        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    public init(){
        // create buttons
        this.startButton = new Button();
        this.startButton.text = "Start Game";
        this.startButton.color = "#363636";
        this.startButton.hover_color = "#cc0707";
        this.startButton.background = "rgb(0,0,0,0)"; // transparent
        this.startButton.hover_background = "rgb(0,0,0,0)"; // transparent
        this.startButton.border = "#363636";
        this.startButton.hover_border = "#cc0707";
        this.startButton.font = "PencilRegular";
        this.startButton.size = "32px";
        this.startButton.w = 150;
        this.startButton.h = 48;
        this.startButton.onclick = async () => {   
            // TODO: Start Game
        };
        this.startButton.x = (StateMachine.canvas.width / 2) - (this.startButton.w / 2);
        this.startButton.y = (StateMachine.canvas.height / 2) - (this.startButton.h / 2);
        
        this.quitButton = new Button();
        this.quitButton.text = "Quit Game";
        this.quitButton.color = "#363636";
        this.quitButton.hover_color = "#cc0707";
        this.quitButton.background = "rgb(0,0,0,0)"; // transparent
        this.quitButton.hover_background = "rgb(0,0,0,0)"; // transparent
        this.quitButton.border = "#363636";
        this.quitButton.hover_border = "#cc0707";
        this.quitButton.font = "PencilRegular";
        this.quitButton.size = "32px";
        this.quitButton.w = 150;
        this.quitButton.h = 48;
        this.quitButton.onclick = async () => {  
            // POP last state, and show thankyou for playing message          
            StateMachine.states.pop();
            let state = new ThankYou();
            await state.init();
            StateMachine.states.push(state);
        };
        this.quitButton.x = (StateMachine.canvas.width / 2) - (this.quitButton.w / 2);
        this.quitButton.y = (StateMachine.canvas.height / 2) - (this.quitButton.h / 2) + this.startButton.h + 8;


        // load assessts
        return (new Promise((resolve, reject)=>{
            this.game_name_logo = new Image();
            this.game_name_logo.src = 'assets/images/game_name_logo.png';
            this.game_name_logo.onload = () => {
                resolve(true);
            };
        }));
    }

    public update(delta:number){
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

            this.startButton.update(delta);
            this.quitButton.update(delta);
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

        
        ctx.beginPath();
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = `rgba(225, 0, 0, 1)`;
        ctx.moveTo(24, 0);
        ctx.lineTo(24, canvas.height);
        ctx.stroke();

        ctx.drawImage(this.game_name_logo, 0, 0, this.game_name_logo.width, this.game_name_logo.height, this.game_name_logo_x, this.game_name_logo_y, this.game_name_logo.width, this.game_name_logo.height);        
        
        if(this.showMenu){ // if enabled show menu buttons           
            this.startButton.render(canvas);
            this.quitButton.render(canvas);
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
            
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = `rgba(225, 0, 0, ${this.counter / 225})`;
            ctx.moveTo(24, 0);
            ctx.lineTo(24, canvas.height);
            ctx.stroke();
        }

        // render buttons here
        
    }
}