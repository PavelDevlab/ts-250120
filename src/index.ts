
type sn = string | number;

function isString(a: sn): a is string {
    return typeof a === 'string'
}

function average(a: number, b: string): string;
function average(a: string, b: number): string;
function average(a: number, b: number, c: number): string;
function average(...args: sn[]): string {
    let total: number = 0;
    for (const a of args) {
        if (isString(a)) {
            total += parseInt(a, 10);
            continue;
        }
        total += a;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}

average(1, '2');
average('2', 1);
average(1, 1, 1);
average('1', '1');
average('1', '2');
average(1);
average(1, 2);
average(1, 2, 's');
average(1, 2, 's', 'asdasd', '1231', '123123', 123123);
const num: number = average(1, 2, 1);
