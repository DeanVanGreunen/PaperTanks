
export default class MathF {
    public static lerp(value1:number, value2:number, amount:number):number {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return value1 + (value2 - value1) * amount;
    };

    public static clamp(value:number, min:number, max:number):number {

        if (value < min) {
            return min;
        }
        else if (value > max) {
            return max;
        }
    
        return value;
    };

    public static distance(x1:number, x2:number, y1:number, y2:number):number{
        let a = x2 - x1;
        let b = y2 - y1;
        let c = a * a;
        let d = b * b;
        let e = c + d;
        let r = Math.sqrt(e);
        return r;
    }

    public static dotProduct(x1:number, y1:number, x2:number, y2:number) : number{
        return (x1 * x2) + (y1 * y2);
    }

    public static scaleVector(v1: {x:number, y:number}, v2:number): {x:number, y:number}{
        return {
            x: v1.x * v2,
            y: v1.y * v2,
        }
    }
    public static subVector(x1:number, y1:number, v2: {x:number, y:number}):{x:number, y:number}{
        return {
            x: x1 - v2.x,
            y: y1 - v2.y
        }
    }
}