type Constructable = new (...args: any[]) => {};

function Timestamp<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'js'];
    }
}

abstract class BasePoint {
    public x: number;
    public y: number;
    private _z: number = 1;

    protected constructor({x, y}: { x: number, y: number }) {
        this.x = x;
        this.y = y;
    }

    public abstract getSum(): number ;

    public get z(): number {
        return this._z;
    }

    public set z(val) {
        this._z = val;
    }
}


let p1 = new BasePoint({x: 1, y: 1});


class Point extends BasePoint {
    public constructor(coords: { x: number, y: number }) {
        super(coords);
    }

    public getSum(): number {
        return this.x + this.y;
    }
}

let p2 = new Point({x: 1, y: 1});


abstract class AbstractFormControl<T> {
    public model: T;

    public focus() {

    }

    public blur() {
    }

    public abstract updateModel(value: T): void;
}

class Input extends AbstractFormControl<string> {
    public model: string = '';

    public updateModel(value: string): void {
        this.model = value;
    }
}
