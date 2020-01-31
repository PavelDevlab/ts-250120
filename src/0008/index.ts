// // Object/Functions
// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type Point = {
//     x: number;
//     y: number;
// }
//
// interface ISetPoint {
//     (x: number, y: number): void
// }
//
// type SetPoint = {
//     (x: number, y: number): void
// }
//
// let point: Point = {
//     x: 1,
//     y: 1
// }
// const fn: SetPoint = (_x: number, _y: number) => {
//     return;
// }

// extends
interface IPartialPoint {
    x: number
}

//
// interface IPoint extends PartialPoint {
//     y: number
// }
//
// type PartialPoint = { x: number };
type Point = { y: number } & IPartialPoint
//
// let point: IPoint = {
//     x: 1,
//     y: 1
// }
//
// // implements
// class PointClass implements Point {
//     x: number = 1;
//     y: number = 1;
// }

// interface IX {
//     x: number
// };
//
// interface IX {
//     y: number
// };
//
// let point: IX = {
//     x: 1,
//     y: 1
// }
