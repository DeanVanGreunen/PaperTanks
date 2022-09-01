import IAgent from './IAgent';
import StateMachine from '../StateMachine';
import Tank from '../GameObjects/Tank';
import Game from '../States/Game';
import Bullet from '../GameObjects/Bullet';
import PlayerAgent from './PlayerAgent';
import MathF from '../MathF';

export default class FollowAgentWithFire extends IAgent {
    canFire:number = 0;
    public update(delta:number, tank:Tank){
        let player = (Game.getPlayer() as Tank).agent;
        // move tank
        let speed = delta * Math.random() / 25;
        // player angel with respect to this enemy tank
        let x2 = Math.round(player.x - tank.x);
        let y2 = Math.round(player.y - tank.y);
        let radians = Math.atan2(x2, y2);
        if(radians < 0 ) radians += 2 * Math.PI;
        let angle = Math.round(radians*180/Math.PI);
        let quad = 0;
        if(angle >= 0 && angle <= 45){
            quad = 0;
        } else if(angle > 45 && angle <= 90){
            quad = 1;
        } else if(angle > 90 && angle <= 135){
            quad = 2;
        } else if(angle > 135 && angle <= 180){
            quad = 3;
        } else if(angle > 180 && angle <= 225){
            quad = 4;
        } else if(angle > 225 && angle <= 270){
            quad = 5;
        } else if(angle > 270 && angle <= 360){
            quad = 6;
        }

        let r1 = Math.random() * 10 * delta;
        let r2 = Math.random() * 10 * delta;
        let distance = MathF.distance(player.x, tank.x, player.y, tank.y);
        if(distance >= 64){
            if(Math.abs(x2 + r1) >= Math.abs(y2 + r2)){
                let nx = MathF.lerp(tank.agent.x, player.x, speed)
                tank.agent.d = tank.agent.x > nx ? 1 : 3
                tank.agent.x = nx; 
            } else {
                let ny = MathF.lerp(tank.agent.y, player.y, speed)
                tank.agent.d = tank.agent.y > ny ? 0 : 2
                tank.agent.y = ny
            }
        } else {
            // align and face player
        }

        // limit tank movement on page for edges
        if(tank.agent.x < 8) tank.agent.x = 8;
        if(tank.agent.y < 8) tank.agent.y = 8;
        
        if(tank.agent.x + tank.agent.w > StateMachine.canvas.width - 8) tank.agent.x = StateMachine.canvas.width - (tank.agent.w + 8);
        if(tank.agent.y + tank.agent.h > StateMachine.canvas.height - 8) tank.agent.y = StateMachine.canvas.height - (tank.agent.h + 8);
        
        // update tank position
        tank.x = tank.agent.x;
        tank.y = tank.agent.y;
        tank.w = tank.agent.w;
        tank.h = tank.agent.h;
        
        // fire randomly if it can
        let random = Math.random() * 20;
        if(((random >= 2 && random <= 3) || (random >= 7 && random <= 9)) && this.canFire <= 0){
            this.canFire = 20;
            let vx = 0;
            let vy = 0;
            let xx = tank.agent.x + tank.agent.w / 2;
            let yy = tank.agent.y + tank.agent.h / 2;
            let speed = 100 * delta;    
            switch(tank.agent.d){
                case 0: // up    
                yy -= 38;
                vx = 0 * speed;
                vy = -1 * speed;
                break;
            case 1: // left       
                xx -= 38; 
                vx = -1 * speed;
                vy = 0 * speed;
                break;
            case 2: // down
                yy += 38;
                vx = 0 * speed;
                vy = 1 * speed;
                break;
            case 3: // right            
                xx += 38; 
                vx = 1 * speed;
                vy = 0 * speed;
                break;
            }
            Game.GameObjects.push(new Bullet(xx, yy, 4, vx, vy));
        }
        this.canFire -= 1 * delta;
    }
    public render(tank:Tank){        
        let ctx = StateMachine.canvas.getContext("2d");    
    }
}