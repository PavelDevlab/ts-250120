export type sn = string | number;

function isString(a: sn): a is string {
    return typeof a === 'string'
}

export function average(a: number, b: string): string;
export function average(a: string, b: number): string;
export function average(a: number, b: number, c: number): string;
export function average(...args: sn[]): string {
    let total: number = 0;
    for (const a of args) {
        if (isString(a)) {
            const v = parseInt(a, 10);
            total += Number.isNaN(v) ? 0 : v;
            continue;
        }
        total += a;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}

