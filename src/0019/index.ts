class Singleton {
    private static _instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
