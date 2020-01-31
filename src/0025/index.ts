import { Validate, RangeParameter } from "./functions";


export class Calculator {
    @Validate
    public updatePercentage(
        @RangeParameter(0, 100) oldValue: number,
        @RangeParameter(0, 100) newValue: number,
    ) {
        console.log(oldValue, newValue)
    }
}

const calc = new Calculator();

calc.updatePercentage(1, 50);
setTimeout(() => {
    calc.updatePercentage(50, 190);
}, 5000)



