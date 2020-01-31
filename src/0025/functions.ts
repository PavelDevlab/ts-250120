import 'reflect-metadata';

const RANGE_KEY: unique symbol = Symbol('RANGE_KEY');

export function Validate(target: object, key: string, desc: PropertyDescriptor): void {
    const originalValue = desc.value;
    desc.value = (...agrs: unknown[]) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const paramValue = agrs[Number(paramIndex)];
            if (Number(paramValue) < min || Number(paramValue) > max) {
                throw new Error(`Error in ${target.constructor.name} instance. Parameter of method ${key} on position ${paramIndex}
             out of range ${[min, max]}
             `)
            }
        }
        return originalValue(...agrs)
    }
}

export function RangeParameter(min: number, max: number): ParameterDecorator {
    return (target: object, key: string | symbol, index: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}

