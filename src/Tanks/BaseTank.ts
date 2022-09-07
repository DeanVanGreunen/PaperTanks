import PlayerAgent from '../Agents/PlayerAgent';
import Tank from '../GameObjects/Tank';
import StateMachine from '../StateMachine';
import ITankRender from './ITankRender';

export default class BaseTank extends ITankRender {
    public render(tank:Tank){
        let ctx = StateMachine.canvas.getContext("2d");

        let x = tank.agent.x;
        let y = tank.agent.y;
        let h = tank.agent.h;
        let w = tank.agent.w;
        let d = tank.agent.d;

        let cx = x + w/2;
        let cy = y + h/2;

        // draw tank - base tank
        ctx.beginPath();
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#58aff3';
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();

        // draw tank circle
        ctx.beginPath();
        ctx.arc(cx, cy, w/4, 0, 2 * Math.PI, false);
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#58aff3';
        ctx.stroke();

        // draw tank gun
        switch(d){
            case 0: // up    
                ctx.beginPath();
                ctx.lineWidth = 0.75;
                ctx.strokeStyle = '#58aff3';
                ctx.moveTo(cx - 2, cy);
                ctx.lineTo(cx - 2, cy - 32);
                ctx.lineTo(cx + 2, cy - 32);
                ctx.lineTo(cx + 2, cy - 0);
                ctx.lineTo(cx + 0, cy - 0);
                ctx.stroke();
                break;
            case 1: // left       
                ctx.beginPath();
                ctx.lineWidth = 0.75;
                ctx.strokeStyle = '#58aff3';
                ctx.moveTo(cx, cy - 2);
                ctx.lineTo(cx - 32, cy -2);
                ctx.lineTo(cx - 32, cy + 2);
                ctx.lineTo(cx, cy + 2);
                ctx.lineTo(cx, cy - 2);
                ctx.stroke();
                break;
            case 2: // down
                ctx.beginPath();
                ctx.lineWidth = 0.75;
                ctx.strokeStyle = '#58aff3';
                ctx.moveTo(cx - 2, cy);
                ctx.lineTo(cx - 2, cy + 32);
                ctx.lineTo(cx + 2, cy + 32);
                ctx.lineTo(cx + 2, cy - 0);
                ctx.lineTo(cx + 0, cy - 0);
                ctx.stroke();
                break;
            case 3: // right            
                ctx.beginPath();
                ctx.lineWidth = 0.75;
                ctx.strokeStyle = '#58aff3';
                ctx.moveTo(cx, cy - 2);
                ctx.lineTo(cx + 32, cy -2);
                ctx.lineTo(cx + 32, cy + 2);
                ctx.lineTo(cx, cy + 2);
                ctx.lineTo(cx, cy - 2);
                ctx.stroke();
                break;
        }

        if(tank.agent instanceof PlayerAgent === false){                  
            ctx.beginPath();
            ctx.lineWidth = 0.75;
            ctx.strokeStyle = '#58aff3';
            ctx.moveTo(x + 2, y + h - 4);
            ctx.lineTo(x + w - 2, y + h - 4);
            ctx.lineTo(x + w - 2, y + h - 2);
            ctx.lineTo(x + 2, y + h - 2);
            ctx.lineTo(x + 2, y + h - 4);
            ctx.stroke();
        }
    }
}

(global as any).BaseTank = BaseTank;