import { checkTypeInRunTime } from "./functions";



class UserAccount {
    @checkTypeInRunTime
    public firstName!: string;

    public makeFullName(_surname: string): string {
        return `${this.firstName} ${_surname}`
    }
}

const user = new UserAccount();
console.log(user);
// user.firstName = 'Ihor';
// console.log(user.firstName )
//
// setTimeout(() => {
//     (user.firstName as any) = 123123;
// }, 5000);




