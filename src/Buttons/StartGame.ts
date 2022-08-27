import IButton from "../IButton";
import IState from "../IState";
import StateMachine from "../StateMachine";
import MainMenu from "./MainMenu";

export default class StartGameButton extends IButton {

    constructor(){
        super();
    }

    public init(){
        
    }

    public async update(delta:number, stateMachine: StateMachine){
    }

    public render(canvas:any){
        let ctx = canvas.getContext("2d");
    }
}