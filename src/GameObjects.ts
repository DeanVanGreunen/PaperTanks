import StateMachine from "./StateMachine";
import Game from "./States/Game";

export default class GameObject { 
    mustDelete:boolean = false; 
    x:number;
    y:number;  
    w:number;
    h:number;  
    public init(){

    }

    public update(delta:number, game:Game){

    }

    public render(game:Game){
        // StateMachine.canvas
    }
    public onCollision(other:GameObject){
        
    }
}