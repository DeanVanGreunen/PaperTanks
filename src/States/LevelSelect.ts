import Button from "../Button";
import IState from "../IState";
import Level from "../Level";
import StateMachine from "../StateMachine";
import Game from "./Game";
import ThankYou from "./ThankYou";

export default class LevelSelect extends IState {
    game_name_logo:any;
    game_name_logo_x:number;
    game_name_logo_y:number;
    counter:number = 255;   
    levelButtons:Button[] = [];
    constructor(){
        super();

        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        Game.score = 0;
    }

    public init(){
        // create buttons
        let rollingy = 20 + 56;
        let keys = Array.from(Level.levels.keys());
        for(const level of keys){
            let button = new Button();
            button.text = level.replace('_', " ");
            button.color = "#363636";
            button.hover_color = "#cc0707";
            button.background = "rgb(0,0,0,0)"; // transparent
            button.hover_background = "rgb(0,0,0,0)"; // transparent
            button.border = "#363636";
            button.hover_border = "#cc0707";
            button.font = "PencilRegular";
            button.size = "32px";
            button.w = 150;
            button.h = 48;
            button.onclick = async () => { 
                Game.GameObjects = Level.getLevel(level);
                Game.NextLevelFrom = level;
                StateMachine.states.pop();
                let state = new Game();
                await state.init();
                StateMachine.states.push(state);
            };
            button.x = (StateMachine.canvas.width / 2) - (button.w / 2);
            button.y = rollingy;
            rollingy += button.h + 12;
            this.levelButtons.push(button);
        }        

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
        // now move game logo up and display buttons, then fade back in
        this.game_name_logo_x = (620 / 2) - ( this.game_name_logo.width / 2);
        this.game_name_logo_y = 12;
        this.counter -= delta * 20;
        if(this.counter <= 0){
            this.counter = 0;
        }    

        for(let i = 0; i < this.levelButtons.length;i++){
            this.levelButtons[i].update(delta);
        }
    }

    public render(){
        let ctx = StateMachine.canvas.getContext("2d");
        let x = (StateMachine.canvas.width / 2) - ( this.game_name_logo.width / 2);
        let y = (StateMachine.canvas.height / 2) - ( this.game_name_logo.height / 2);
        ctx.imageSmoothingEnabled = false;
        
        // draw grid here #58aff3
        for(let i=0;i<40;i++){
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.strokeStyle = '#58aff3'; // 88, 175, 243
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

        ctx.drawImage(this.game_name_logo, 0, 0, this.game_name_logo.width, this.game_name_logo.height, this.game_name_logo_x, this.game_name_logo_y, this.game_name_logo.width, this.game_name_logo.height);        
        
        for(let i = 0; i < this.levelButtons.length;i++){
            this.levelButtons[i].render();
        }

        // used for fading
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

        // render buttons here
        
    }
}