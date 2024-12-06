//mirip type
interface Point3 {
    x: number
    y: number
}

const pt: Point = {x: 12,y: 24};

//readonly.. optional
interface Person {
    readonly id: number
    firstName: string
    lastName: string
    nick?: string
    sayHi: () => string //untuk menulis method, jangan buat fungsi di sini, kalau mau ada argumennya ya di kasih argumen kaya di bawah

}

const thomas: Person ={
    firstName: 'thomas',
    lastName: 'ttt',        //bisa dibuat tanpa nick karena optional
    id: 22222,
    sayHi: () =>  {return 'Hello'}, // contoh diatas cuma method, ini di panggil. 
}

thomas.firstName = 'tedd'
// thomas.id = 2323 --> tidak bisa karena readonly

interface Product {
    name: string
    price: number
    applyDiscount(discount: number): number; //contoh method yang ada parameternya
    }

const shoes: Product = {
    name: 'blue shoes',
    price: 100,
    applyDiscount(amount: number){      //amount harus number karena sesuai interface product yang sudah ditentukan
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }

}

shoes.applyDiscount(.3);
