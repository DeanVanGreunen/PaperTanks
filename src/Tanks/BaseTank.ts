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
        let xdir = tank.agent.xdir;
        let ydir = tank.agent.ydir;

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

        // draw tank circle
        
        ctx.beginPath();
        ctx.arc(x + w/2, y + h/2, w/4, 0, 2 * Math.PI, false);
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = '#58aff3';
        ctx.stroke();

        // draw tank gun
    }
}