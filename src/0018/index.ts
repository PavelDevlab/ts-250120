class BasePoint {
    public x: number;
    public y: number;
    private _z: number = 1;

    public constructor({x, y}: { x: number, y: number }) {
        this.x = x;
        this.y = y;
    }

    public getSum(): number {
        return this.x + this.y
    }

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
        return super.getSum();
    }
}

let p2 = new BasePoint({x: 1, y: 1});
