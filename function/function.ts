//tambahkan tipe variabel

function square (num: number) {
    return num *num
}

square(3);
//kalau diisi bukan number akan salah
//square(true)

function greet (person: string, umur: number) {
    const age: number = umur  * 2;
    const ageString: string = age.toString();
    return 'hi ${person} usiamu ${ageString}'
}

greet('Mas Bos', 23);

const doSomething = (person: string, age: number, isFunny: boolean) =>{ return 'Hai' + person};

//tambahkan default value di function

function greetWithDefault (person: string = "Nama Default", umur: number = 19) {
    const age: number = umur  * 2;
    const ageString: string = age.toString();
    return 'hi ${person} usiamu ${ageString}'
}

//bisa juga returnya yang ditentukan tipenya, setelah variabel yang dimasukkan seperti contoh di bawah
const addNums = (x: number, y:number): number => {return x*y}

//kalau returnya nanti bisa string atau number, tidak usah diberikan tipe returnya. seperti contoh di bawah.
function rando (num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    } else {
        return num;
    }
} 

//kalau array dan sama dah di detect langsung. di fungsi map array ga usah di deklarasikan fungsinya.
const colors = ['merah', 'hijau', 'biru'];
colors.map (color => {
    return color.toUpperCase();
})


//void --> fungsi yang tidak mereturn apa-apa.. contoh fungsi dibawah hanay mereturn alert, ga ada data atau variabel yang direturn
// cuma return console.log juga bisa makai :void .. kalau makai tulisan return nanti akan jadi error. 
// fungsi yang ga ada tulisan return, jadinya void
const annoyUser = (num: number): void => { alert('haiiiii')}


//never.. fungsi itu seharusnya tidak mereturn apa-apa, atau funsi yang selalu berjalan tapi tidak pernah finish
//contoh di bawah ini fungsi ini tidak boleh mereturn apa-apa (variabel, data, dll maksudnya)

function makeError(msg: string): never {
    throw new Error(msg)
}
