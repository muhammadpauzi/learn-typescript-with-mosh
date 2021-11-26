// data types & declaring variables
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

// enum
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Blue;

// not important (type assertions) / (for show intellisense?)
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// arrow function in ts
let log = function (message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

// //                          inline annotation
// let drawPoint = (point: { x: number, y: number }) => {
//     // ...
// }

// or using Interface
// interface Point {
//     x: number,
//     y: number,
//     draw: (point) => void
// }

let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point){
    // ...
}

drawPoint({
    x: 1,
    y: 2
});