//array ada tipenya juga di variablenya

const activeUsers: string[] = [];
//kalau ga ada tipenya berarti any:
const passiveUser: any[] = [];

activeUsers.push('nama1');
activeUsers.push('nama2');
console.log(activeUsers);

//contoh untuk number
const ageList: number[] = [];

//alternative syntax untuk array, misal untuk boolean

const bools: Array<boolean> = []; //sama dengan const bools: boolean[] = [];

//makai type dulu juga bisa

type Point = {
    x: number,
    y: number
}

const cooords: Point[] = []; // point tadi di masukkan jadi array coords
cooords.push({x: 23, y : 24}) // isi araraynya
cooords.push({x: 333, y : 56}) // isi araraynya

//multidimensional -- kaya matriks
const board = [["X", "Y", "P"], ["R","t","I"],["A","B","C"]]; // nanti ditentukan automatis 
const board1: string[][] = [["X", "Y", "P"], 
    ["R", "t", "I"], 
    ["A", "B", "C"]
];          // pakai string[][] -- jadi 3 dimensional array
