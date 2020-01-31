// interface UserAccount {
//     firstName: string;
//     age: number;
// }

// let p1 = UserAccount
//
// let userAccount = {
//     firstName: 'Ihor',
//     age: 33
// }
//
// let u1: Response = 1;
//
// class UserAccount {
//     firstName!: string;
//     age!: number;
// }
// //
// let u2 = new UserAccount();


let isDone: boolean = true;

let nan: number = NaN;
let decimal: number = 6;
let binar: number = 0b0101;

let color: string = 'blue';

let nill: null = null;
let und: undefined = undefined;

let bigInt: bigint = 4n;


const key1 = Symbol('key1');
let key2: symbol = Symbol('key2');
let key3: symbol = Symbol('key3');

let strictObj = {
    [key1]: 'value 1',
    [key2]: 'value 2',
}

let val1 = strictObj[key2];
