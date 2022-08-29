
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
}