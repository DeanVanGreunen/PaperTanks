import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';

export default class PlayerAgent extends IAgent {
    public update(delta:number, tank:Tank){
        if(StateMachine.keyboard.isLeftArrow){
            tank.agent.x -= 10 * delta;
        } else if(StateMachine.keyboard.isRightArrow){
            tank.agent.x += 10 * delta;
        }
        
        if(StateMachine.keyboard.isUpArrow){
            tank.agent.y -= 10 * delta;            
        } else if(StateMachine.keyboard.isDownArrow){
            tank.agent.y += 10 * delta;            
        }

        // limit player movement on page for edges
        if(tank.agent.x < 8) tank.agent.x = 8;
        if(tank.agent.y < 8) tank.agent.y = 8;
        
        if(tank.agent.x + tank.agent.w > StateMachine.canvas.width - 8) tank.agent.x = StateMachine.canvas.width - (tank.agent.w + 8);
        if(tank.agent.y + tank.agent.h > StateMachine.canvas.height - 8) tank.agent.y = StateMachine.canvas.height - (tank.agent.h + 8);

        // adding/removing 8 around board, its unlikely to draw on the ends of the page
    }
}