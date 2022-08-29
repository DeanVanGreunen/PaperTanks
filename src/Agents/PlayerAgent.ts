import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';
import Game from '../States/Game';
import Bullet from '../GameObjects/Bullet';

export default class PlayerAgent extends IAgent {
    health:number = 100;
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
            this.health -= 10 * delta;
            this.canFire = 10;
            let vx = 0;
            let vy = 0;
            let xx = tank.agent.x + tank.agent.w / 2;
            let yy = tank.agent.y + tank.agent.h / 2;
            let speed = 200 * delta;            
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
    public render(tank:Tank){        
        let ctx = StateMachine.canvas.getContext("2d");
        let cw = StateMachine.canvas.width;
        let ch = StateMachine.canvas.height;
        let padding = 8;
        // draw health bar
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#cc0707';
        ctx.moveTo(0 + padding, 0 + padding);
        ctx.lineTo(0 + padding, 12 + padding);
        ctx.lineTo(96 + padding, 12 + padding);
        ctx.lineTo(96 + padding, 0 + padding);
        ctx.lineTo(0 + padding, 0 + padding);
        ctx.stroke();

        ctx.fillStyle = '#cc0707';
        // fill health bar
        let width = (96/100) * this.health;
        ctx.moveTo(0 + padding, 0 + padding);
        ctx.lineTo(0 + padding, 12 + padding);
        ctx.lineTo(width + padding, 12 + padding);
        ctx.lineTo(width + padding, 0 + padding);
        ctx.lineTo(0 + padding, 0 + padding);
        ctx.fill();

        // can fire
        
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#4CBB17';
        ctx.moveTo(cw - ( 12 + padding), 0 + padding);
        ctx.lineTo(cw - ( 12 + padding), 12 + padding);
        ctx.lineTo(cw - padding, 12 + padding);
        ctx.lineTo(cw - padding, padding);
        ctx.lineTo(cw - ( 12 + padding), 0 + padding);
        ctx.stroke();

        if(this.canFire <= 0){
            ctx.beginPath();
            ctx.fillStyle = '#4CBB17';
            ctx.moveTo(cw - ( 12 + padding), 0 + padding);
            ctx.lineTo(cw - ( 12 + padding), 12 + padding);
            ctx.lineTo(cw - padding, 12 + padding);
            ctx.lineTo(cw - padding, padding);
            ctx.lineTo(cw - ( 12 + padding), 0 + padding);
            ctx.fill();
        }
    }
}