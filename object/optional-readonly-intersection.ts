//optional, bisa digunakan atau tidak (tinggal tambah question mark di depan nama variabel)
//contohnya z di bawah ini.

type point1 = {
    x: number,
    y: number,
    z?: number
}

//readonly -- only read. can not be changed.. tambahkan readonly di depan nama variabel. maksudnya akan tidak bisa diubah setelah diberikan value

type User = {
    readonly id: number,
    name: string
}

const user: User = {
    id: 998,
    name: 'super'
}

// user.id = 99  --> default valuenya ga akan bisa diinsert atau diubah karena read only. 
user.name = 'ted'  // ini aman, karena bisa merubah user.name, tapi user.id ga bisa


//intersection, combine beberapa type

type Circle = {
    radius: number
}

type Colorfull = {
    color: string
}

// tambahkan & maka dua tipe tadi digabung
type ColorfullCircle = Circle & Colorfull

const happyFace:  ColorfullCircle = {
    radius: 999,
    color: 'red'
}


//misal mau tambahkan variable lain juga bisa ditambahkan langsung, misal

type LiveColorfullCircle= Circle & Colorfull & {
    status: boolean
}