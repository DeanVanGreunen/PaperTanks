import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';
import Game from '../States/Game';
import Bullet from '../GameObjects/Bullet';
import PlayerAgent from './PlayerAgent';
import MathF from '../MathF';

export default class DumbAgent extends IAgent {
    public update(delta:number, tank:Tank){
    }
    public render(tank:Tank){        
        let ctx = StateMachine.canvas.getContext("2d");    
    }
}


(global as any).DumbAgent = DumbAgent;