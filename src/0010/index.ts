// T extends U ? X: Y
// No undefined
// type NonNull<T> = T extends (undefined | null) ? never : T;
type snun = string | null | undefined | number;
let someValue: NonNullable<snun> = 'str';


// First element
type arr = [() => [number, string], number];

type FirstReturnItemType<T> = T extends [infer U, ...unknown[]]
    ? U extends (...args: unknown[]) => infer R ? R : never
    : never

let returnType: FirstReturnItemType<string> = 1;

function fn(_a: number, b: number): () => true {
    return () => true;
}

//  FunctionParamsAndReturn

type NonFunction<T> = T extends Function ? never : T;

type FunctionParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R
    : never

const c: FunctionParamsAndReturn<typeof fn> = Symbol();

let a: number | (() => boolean);
