import IState from "./IState";
import Splash from "./States/Splash";

export default class StateMachine {
    interval:any;
    static mustQuit:boolean = false;
    canvas:any | null = null;
    states:IState[];

    mouse:any;
    keyboard:any;


    constructor(canvas:any){
        this.canvas = canvas;   

        this.init = this.init.bind(this);
        this.loop = this.loop.bind(this);
    }

    async init(){
        // load splash, pop and add game state
        this.states = [];
        let splash = new Splash();
        await splash.init();
        this.states.push(splash);

        // start game loop
        this.interval = setInterval(this.loop, 33);
    }

    loop(){
        if(StateMachine.mustQuit){
            clearInterval(this.interval);
        }
        for(let i=0;i<this.states.length; i++){
            this.states[i].update(0.33, this);
        }


        // clear with light grey
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#E5E5E5";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        

        for(let i=0;i<this.states.length; i++){
            this.states[i].render(this.canvas);
        }
    }
}