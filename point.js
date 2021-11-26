"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    /**
     * ? (optional)
     * */
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: ".concat(this._x, ", Y: ").concat(this._y));
    };
    Object.defineProperty(Point.prototype, "x", {
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
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
