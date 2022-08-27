import IState from "../IState";

export default class Splash extends IState {
    logo:any;
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

    public update(delta:number){

    }

    public render(canvas:any){
        let ctx = canvas.getContext("2d");
        let x = (canvas.width / 2) - ( this.logo.width / 2);
        let y = (canvas.height / 2) - ( this.logo.height / 2);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.logo, 0, 0, this.logo.width, this.logo.height, x, y, this.logo.width, this.logo.height);
    }
}