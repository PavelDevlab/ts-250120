export function savePersistance(target: any, key: string) {
    let _val = target[key];
    const localKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        console.log(`Get ${key} => ${_val}`);
        return localStorage.getItem(localKey) ?? _val;
    }
    const setter = (newValuer: string) => {
        console.log(typeof key);
        console.log(`Set ${key} => ${newValuer}`);
        _val = newValuer;
        localStorage.setItem(localKey, newValuer);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}
