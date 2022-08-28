import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';
import Game from '../States/Game';
import Bullet from '../GameObjects/Bullet';

export default class PlayerAgent extends IAgent {
    canFire:number = 0;
    public update(delta:number, tank:Tank){
        // move player
        if(StateMachine.keyboard.isLeftArrow){
            tank.agent.x -= 10 * delta;
            tank.agent.d = 1;       
        } else if(StateMachine.keyboard.isRightArrow){
            tank.agent.x += 10 * delta;
            tank.agent.d = 3;       
        } else if(StateMachine.keyboard.isUpArrow){
            tank.agent.y -= 10 * delta;            
            tank.agent.d = 0;       
        } else if(StateMachine.keyboard.isDownArrow){
            tank.agent.y += 10 * delta;            
            tank.agent.d = 2;       
        }
        
        // create bullet
        if(StateMachine.keyboard.isSpace && this.canFire <= 0){
            this.canFire = 10;
            let vx = 0;
            let vy = 0;
            let xx = tank.agent.x + tank.agent.w / 2;
            let yy = tank.agent.y + tank.agent.h / 2;
            let speed = 10;            
            switch(this.d){
                case 0: // up    
                yy -= 32;
                vx = 0 * speed;
                vy = -1 * speed;
                break;
            case 1: // left       
                xx -= 32; 
                vx = -1 * speed;
                vy = 0 * speed;
                break;
            case 2: // down
                yy += 32;
                vx = 0 * speed;
                vy = 1 * speed;
                break;
            case 3: // right            
                xx += 32; 
                vx = 1 * speed;
                vy = 0 * speed;
                break;
            }
            Game.GameObjects.push(new Bullet(xx, yy, 4, vx, vy));
        }

        // limit player movement on page for edges
        if(tank.agent.x < 8) tank.agent.x = 8;
        if(tank.agent.y < 8) tank.agent.y = 8;
        
        if(tank.agent.x + tank.agent.w > StateMachine.canvas.width - 8) tank.agent.x = StateMachine.canvas.width - (tank.agent.w + 8);
        if(tank.agent.y + tank.agent.h > StateMachine.canvas.height - 8) tank.agent.y = StateMachine.canvas.height - (tank.agent.h + 8);

        this.canFire -= delta;
    }
}