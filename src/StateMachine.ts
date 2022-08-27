import IState from "./IState";
import Splash from "./States/Splash";

export default class StateMachine {
    interval:any;
    static mustQuit:boolean = false;
    static canvas:any | null = null;
    static states:IState[];

    static mouse_x:any;
    static mouse_y:any;
    static mouse_down:boolean = false;
    static keyboard:any;


    constructor(canvas:any){
        StateMachine.canvas = canvas;   

        this.init = this.init.bind(this);
        this.loop = this.loop.bind(this);
    }

    async init(){
        // bind to mouse   
        document.addEventListener('mousemove', (e)=>{
            let rect = StateMachine.canvas.getBoundingClientRect();
            StateMachine.mouse_x = e.pageX - rect.left;
            StateMachine.mouse_y = e.pageY - rect.top;
        });  
        document.addEventListener('mousedown', (e)=>{
            StateMachine.mouse_down = e.button == 0;
        });     
        // bind to keyboard

        // load splash, pop and add game state
        StateMachine.states = [];
        let splash = new Splash();
        await splash.init();
        StateMachine.states.push(splash);

        // start game loop
        this.interval = setInterval(this.loop, 33);
    }

    loop(){
        if(StateMachine.mustQuit){
            clearInterval(this.interval);
        }
        for(let i=0;i<StateMachine.states.length; i++){
            StateMachine.states[i].update(0.33);
        }


        // clear with light grey
        let ctx = StateMachine.canvas.getContext("2d");
        ctx.fillStyle = "#E5E5E5";
        ctx.fillRect(0, 0, StateMachine.canvas.width, StateMachine.canvas.height);
        
        

        for(let i=0;i<StateMachine.states.length; i++){
            StateMachine.states[i].render(StateMachine.canvas);
        }

        // reset mouse down
        StateMachine.mouse_down = false;
    }
}