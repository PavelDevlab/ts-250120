export function debounce(ms: number) {
    let timeId: number | null;
    return (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = setTimeout(() => {
                    originalFn(...args);
                }, ms)
            }
        }
    }
}

export function logInputEventValue(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {
            const value = (e.target as HTMLInputElement).value;
            console.log(`Search => ${value}`);
            originalFn(value);
        }
    }
}

export function logErrorToSentry(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (...args: unknown[]) => {
            try {
                originalFn(...args);
            } catch (err) {
                console.log(err);
                // send to sentry
            }
        }
    }
}
