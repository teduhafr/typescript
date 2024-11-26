//contoh penggunaan nested object, buat typenya trus masukkan ke fungsi.

function calculatePayout(song: Song): number {
    return song.numStreams * 0.333 ;
}
type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function printSong(song: Song): void {
    console.log(song.title + ' - ' + song.artist)
}

//buat variabel dari type
const mySong: Song = {
    title: "judul lagu",
    artist: "penyani x",
    numStreams: 2342342,
    credits: {
        producer: 'mas produser',
        writer: 'mas penulis',
    }
}


//kemudian masukkan ke fungsi
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);