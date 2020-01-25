type NotReadonly<T> = {
    -readonly [key in keyof T]: T[key]
}

type user = {
    readonly age: number;
    name1: string
}

let user: Partial<user> = {
    age: 33,
    name: 'Ihor'
}

type RemoveByType<T, E> = {
    [key in keyof T]: E extends T[key] ? never : T[key]
}[keyof T]

let someValue: RemoveByType<typeof user, number> = true;

