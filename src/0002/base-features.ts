/*** let/const*/
let period = 60;
const baseUrl = 'localhost:8090';

/***Objects*/
let firstName = 'Ihor';
let account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/*** spred operators**/
let person = {...account};
let dates = [...[11, 12, 13]];

/*** destructoring***/
let {firstName: username} = account;
let [firstEl] = dates;


/****template string*/
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person): string {
    return `${start}${name}${end}`
}

console.log(userMessage`Good day ,${person} !!!`);

/*** for of**/
for (const date of dates) {
    console.log(date);
}

let sum = (a: number, b: number) => a + b;

/*** class*/

class Acc {
    name: string = 'Ihor';

    getName() {
        return this.name;
    }
}


/***Optional chaining **/
let user: any = {};
let value = user?.info?.male;

/*** || -> ??**/
let admin;
let p = admin ?? user;

/***enum*/

enum Size {
    S = 42,
    M = 44,
    XL = 52
}

const mySize = Size.XL;

enum UserAction {
    CREATE= '[USER] create new user',
}

enum Tooltip {
    TOP,
    BOTTOM
}
