const user: {
    readonly firstName: string;
    readonly age?: number;
} = {
    firstName: 'Ihor',
    age: 33
};

let key: string;

let booleanMap: {
    [key: string]: string | number
} = {
    name: 'Ihor',
    age: 33
}

type User = {
    readonly firstName: string;
    readonly age?: number;
}

let arr: User[] = [{
    firstName: 'Ihor',
    age: 33
}, {
    firstName: 'Ihor',
    age: 33
}]

let arr1: ReadonlyArray<number> = [1, 2, 3];
arr1[100] = 1;
arr1.push(2);

let tupleArr: readonly [number, string] = [1, '1'];
tupleArr[100] = 1;
tupleArr.push(2);

let x  = 10 as const;
let arr2 =  [10, true] as const;
arr2 = [10, false];
arr2[100] = 1;
arr2.push(2);

let acc = {
    firstName: 'Ihor',
    age: 33
} as const;

acc.age = 34
