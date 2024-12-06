// enum is just set of consts.. banyak variabel const jadi 1
enum OrderStatus {
    PENDING,  //OrderStatus.PENDING = 0 .. defaultnya index, kecuali ditentukan misal PENDING = 4 atau "masih di tahan", baru merubah jadi bukan index
    SHIPPED,
    DELIVERED,
    RETURNED
} // JADI ORDERSTATUS HANYA AKAN ADA 4 INI YANG DIBOLEHKAN


const myStatus = OrderStatus.DELIVERED;
console.log(myStatus); //akan keluar 2, yang disimpan di enum adalah indexnya kalau dipanggil, kecuali ada diubah di enumnya misal delivered = 5 maka akan jadi 5

//contoh enum di fungsi
function isDelivered (status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

enum enumDenganValue {
    value1 = 'asdadad',
    value2 = 'asdu9haudhahd',
    value3 = 333
}

console.log(enumDenganValue.value2);