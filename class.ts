import { Point } from "./point";

const point = new Point(1, 2);
// let x = point.getX();
// point.setX(10);
let x = point.x;
point.x = 10;
point.draw();

