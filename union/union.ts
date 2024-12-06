//union -> bisa memberi beberapa types, memakai atau |
let age: number|string = 21; //age bisa number atau string, ini tidak hanya 2 bisa 3 atau lebih misal number|string|boolean
age = 23; //number
age = "33" // string

type Point1 = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

//contoh penggunaan union bisa milih di typenya juga
let coordinates: Point1 | Loc = {x: 1, y: 2};
coordinates = {lat: 223, long: 332}; // bisa di set diubah ke loc, meski di defaultnya point. kode di atas

//union types with function

function printAge(age: number | string) {     // fungsi ini aman, tapi kalau nanti di fungsi ada operasi matematik akan error.
    console.log(`You are ${age} years old`)
}

printAge(23);
printAge('33'); // tidak ada masalah number or string karena memang fungsinya menerima 2

function calculatedTax (price: number | string, tax: number ) {
    return console.log( parseInt(price.toString()) * tax  )               // ini dipaksa untuk jadi number meski number atau string
}

// cara lain 
function calculatedTax1 (price: number | string, tax: number ) {
    if (typeof price === 'string') {
        return console.log(parseInt(price) * tax)                   // sudah dipastikan kalau price itu string
    }  else {
        return console.log(price * tax)                             // sudah dipastikan ini number karena type of price pasti number
    }             
}

calculatedTax('2000',0.5);
calculatedTax(4000,0.5);


//union types biar bisa memakai beberapa type, tapi ga any supaya ga semua bisa masuk
const stuff: (number | string) []  = [1,2,3,'asdasd','asdasds']; //dari type
const cooord: (Point1 | Loc) [] = []
cooord.push({x: 3, y:5});
cooord.push({lat: 3434, long:444});

//LITERAL TYPES
let zero: 0 = 0 ;   // ini tidak adak an bisa diubah, misal zero = 5 , pasti gagal. sama kaya contoh di bawah juga
let hi: 'hi' = 'hi';

//bisa juga membatasi beberapa pilihan jawban saja
const giveAnswer = (answer: 'yes' | 'no' | 'maybe') => {
    return `The Answer is ${answer}`
} 
//fungsi di atas hanya bisa menerima parameter yes, no, may be
giveAnswer('maybe');
//giveAnswer('susah'); --> tidak akan bisa jalan

let  mood: 'Happy' | 'Sad' | 'Angry' = 'Sad';
mood = 'Angry';
// mood = 'error'; --> tidak bisa, error






