import StateMachine from "../StateMachine";
import Tank from "../GameObjects/Tank";

export default class IAgent {
    public x:number; // y pos
    public y:number; // x pos
    public w:number; // width
    public h:number; // height

    public xdir:number = 0; // -1 = left, 1 = right
    public ydir:number = -1; // -1 = top, 1 = bottom
    
    public constructor(x:number, y:number, w:number, h:number){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public update(delta:number, tank:Tank){

    }
}