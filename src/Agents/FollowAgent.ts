import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';
import Game from '../States/Game';
import Bullet from '../GameObjects/Bullet';
import PlayerAgent from './PlayerAgent';
import MathF from '../MathF';

export default class FollowAgent extends IAgent {
    public update(delta:number, tank:Tank){
        let player = (Game.getPlayer() as Tank).agent;
        // move tank
        let speed = delta / 10;
        // add follow logic here

        // limit player movement on page for edges
        if(tank.agent.x < 8) tank.agent.x = 8;
        if(tank.agent.y < 8) tank.agent.y = 8;
        
        if(tank.agent.x + tank.agent.w > StateMachine.canvas.width - 8) tank.agent.x = StateMachine.canvas.width - (tank.agent.w + 8);
        if(tank.agent.y + tank.agent.h > StateMachine.canvas.height - 8) tank.agent.y = StateMachine.canvas.height - (tank.agent.h + 8);
    }
    public render(tank:Tank){        
        let ctx = StateMachine.canvas.getContext("2d");    
    }
}