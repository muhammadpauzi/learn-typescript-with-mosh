export class Point {
    // private x: number;
    // private y: number;

    /** 
     * ? (optional) 
     * */
    constructor(private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`);
    }

    /** 
     * setter (set) & getter (get)
     * */
    // getX() {
    //     return this.x;
    // }

    // setX(value) {
    //     if (value < 0)
    //         throw new Error('Value cannot be less than 0.');

    //     this.x = value;
    // }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._x = value;
    }


    // getDistance(another: Point) {
    // ...
    // }
}