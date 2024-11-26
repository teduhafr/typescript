//contoh penggunaan nested object, buat typenya trus masukkan ke fungsi.
function calculatePayout(song) {
    return song.numStreams * 0.333;
}
function printSong(song) {
    console.log(song.title + ' - ' + song.artist);
}
//buat variabel dari type
var mySong = {
    title: "judul lagu",
    artist: "penyani x",
    numStreams: 2342342,
    credits: {
        producer: 'mas produser',
        writer: 'mas penulis',
    }
};
//kemudian masukkan ke fungsi
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
