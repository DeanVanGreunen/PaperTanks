import Tank from "../GameObjects/Tank";

export default class IAgent {
    public x:number; // y pos
    public y:number; // x pos
    public w:number; // width
    public h:number; // height

    public d:number = 0; // 0 = up, 1 = left, 2 = down, 3 = right

    public health:number = 0;
    public score:number = 0;
    
    public constructor(x:number, y:number, w:number, h:number){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public update(delta:number, tank:Tank){

    }
    public render(tank:Tank){

    }
}


(global as any).IAgent = IAgent;