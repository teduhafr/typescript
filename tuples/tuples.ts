//hanya di ts, ga bisa di js
let myTupple: [number, string] = [1,'ssasd']; //tidak akan bisa dibalik, dll
let myTupple2: [string, number] 
myTupple2= ['sadsa', 213123]; //tidak akan bisa dibalik, atau ditambah, dikurangi, akan error

//kalau membatasi jumlah array tinggal taruh di dalamnya
const color: [number, number, number] = [233,24,123]; //hanya akan bisa menerima tuple 3 array

//bila dimasukkan ke type akan seperti ini:
type MyResponse = [number, string];

const goodRes: MyResponse = [200, 'OK'];

//meski di lock oleh tuppe, tetep bisa di push. 

goodRes.push(23);
goodRes.push(40);  // kita push dan jadi 4 arrraynya dan tidak ada masalah. 

//bisa juga tupples per array

const reposnses: MyResponse[] = [[233,'ok'],[404,'not found']] //ada dua array di dalam array, tapi tiap array sesuai dengan aturan tuppelnya
