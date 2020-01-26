import 'reflect-metadata';

export function checkTypeInRunTime(_target: object, key: string,): void {
    const {name: type} = Reflect.getMetadata('design:type', _target, key);
    console.log(`${key} type: ${type}`);
    let val: any;
    Object.defineProperty(_target, key, {
        get(): any {
            return val;
        },
        set(newValue: any): void {
            if (typeof newValue !== type.toLowerCase()) {
                throw new Error(`type for ${key} is not ${type}. You tried to set ${typeof newValue} `)
            }
            val = newValue;
        }
    })
}
