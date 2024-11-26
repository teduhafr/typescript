

const cat = {
    name: 'kucing',
    breed: 'persia',
    age: 3
}

//object di dalam function.
function printName(person: { firstName: string, lastName: string, age: number}) {
    console.log(person.firstName);
}
printName({firstName: "Agus" , lastName: "riyo", age: 23});

//object single line tipe dan default value
let coordinate: {x: number, y: number } = {x:32, y:90};

//function dengan return beberapa dan dibuat juga tipe fileny
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

//excess
printName({firstName:'teduh', lastName:'afr', age:34})

// kalau object di set di variabel lain dulu, baru dimasukka ke fungsi hanya akan mengecek objek yang seharusnya ada. variabel lain dianggap tidak ada masalah
const orang = {firstName:'teduh', lastName:'afr', age:34, nikah: false};
printName(orang);
//diatas orang di asign ke printname tetap amana meski ada variabel lain (nikah). beda kalau langsung di assign ke printName ga ke orang dulu.
// printName({firstName:'teduh', lastName:'afr', age:34, nikah:false}) --> ini akan buat error
