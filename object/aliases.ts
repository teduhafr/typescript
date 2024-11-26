let coordinate1: {x: number, y: number } = {x:32, y:90};





function doublePoint(point: Point): Point {
 return({x : point.x ,  y: point.y});
}
// point di depan untuk memasukkan tipe variabel masukan, yang kedua itu output keluarannya. 



//alias biar bisa dipakai di banyak tempat.. makai type

type Point = {
    x: number,
    y: number
}
//jadi tidak perlu mendelkarasikan tipe x dan y, langsung aja
let coordinate2: Point = {x: 23, y: 3};

function randomCoordinate(): Point {
    return {x: Math.random(), y: Math.random()}
}

//type juga bisa buat single variable

type MyNum = number;
const age: MyNum = 24;