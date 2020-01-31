// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         b = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);
type sn = string | number;

function isString(a: sn): a is string {
    return typeof a === 'string'
}

function average(...args: sn[]): string {
    let total: number = 0;
    for (const a of args) {
        if (isString(a)) {
            total += parseInt(a, 10);
            continue;
        }
        total += a;
    }
    const avg = total/args.length;
    return `Average is ${avg}`;
}

average(1);
average(1, 2);
average(1, 2, 's');
average(1, 2, 's', 'asdasd', '1231', '123123', 123123);
const num: number = average(1, 2, 1);
