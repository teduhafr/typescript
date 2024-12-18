//backup dari laptop sendiri, nanti diupdate dengan punya kantor
//reopening and add new variabel
interface Dog {
    name: string
    age: number
}

interface Dog {
    breed: string
    bark(): string
}

//dua interface di atas bisa disatukan (auto jadi 1 malahan)
const elton: Dog = {
    name: 'sss0',
    age: 55,
    breed: 'sss',
    bark() {return 'hello'}
}


//extend interface
//misal mengextend Dog yang di atas makai extends 

interface JobDog extends Dog {
    job: "nganggur" | 'k9'   //supaya cuma bisa milih ini.
}

const chewy: JobDog ={
    name: 'sdad',
    age: 9,
    breed: 'iii',
    bark() {return 'uiii'},
    job: 'k9'
}

//extends juga bisa beberapa interface, ga hanya 1

interface Person {
    name: string
}

interface Employee {
    readonly id: number
    email: string
}

// contoh extend 2 interface
interface Enginer extends Person, Employee {
    level: 1 | 2 | 3
    languages: string[]
}


//perbedaan antara interface dan type