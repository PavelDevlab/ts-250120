// interface/types/class/function

// function fn(a:number, b: number) {
//   return a + b;
// }
//
// fn(1,2)

type IAccount<GeneralInfo extends { age: number }, Id = number> = {
    id: Id,
    info: GeneralInfo
}

let admin: IAccount<{ usersId: string[], age: number }> = {
    id: 1,
    info: {usersId: ['1', '2', '3'], age: 19}
}
let user: IAccount<{ age: number }, string> = {
    id: 'asdasd12312asd',
    info: {
        age: 44
    }
}
