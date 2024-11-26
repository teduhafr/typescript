let judulFilm: string = "Judul film";
judulFilm = "Judul baru";
console.log(judulFilm.toLowerCase);

let asli: boolean = true;

let numFilm: number = 9;
numFilm += 1 ;


//Type Inference, tidak usah dideklarasikan : string misalnya juga bisa. 
let x = 'dua belas';
x = 'tiga giaklsmak lkads';

//typescript akan auto mendetect, dan ga bisa diubah karena diatas sudah didetect sebagai string
// x = 23; -> hasilnya akan error, number di assign ke string


//kalau mau semua tipe pakai any
const semuajenis: any = '';


// memberikan tipe variable di langkah kedua, tidak langsung diberikan.

const movies = ['dan', 'di', 'do'];
let cariFilm;

for (let movie of movies) {
    if (movie === "dan") {
        cariFilm = 'Filmoke'
    } 
}


//kode diatas akan memberikan cariFilm variabel;