
/**
 * ALGORITMA function yang menghasilkan objek yang berisi keys2 yang tertata dari parameter memberId dan money
 * 1. deklarasikan variabel hasil sebagai objek dengan property yang terdiri dari
 *  1a. keys memberId dengan nilai parameter memberId
 *  1b. keys money dengan nilai parameter money
 *  1c. keys 'list purchased' dengan array kosong
 *  1d. keys changeMoney dengan nilai 0
 * 2. Jika memberId falsy maka 
 *  2a. return 'mohon maaf, toko X hanya berlaku untuk member'
 * 3. Selain itu jika parameter money lebih kecil dari 50000 maka
 *  3a. return 'mohon maaf, uang anda tidak cukup'
 * 4. Selain itu, maka
 *  4a. Lakukan pengulangan dengan indeks i = 0 sampai limitnya panjang array sale
 *      4aa. Jika parameter money lebih besar atau sama dengan array sales indeks ke i indeks ke 1 maka
 *          4aaa. push sales indeks ke i indeks ke 0 ke array 'list Purchased'
 *          4aab. money = money - sales indeks ke i indeks ke 1
 *  4b. set nilai keys changeMoney = money 
 *  4c. return objek hasil
 */
var sale = [['Sepatu Stacattu', 1500000],
['Baju Zoro', 500000],
['Baju H&N', 250000],
['Sweater Uniklooh', 175000],
['Casing Handphone', 50000]
]

function shoppingTime(memberId, money) {
    var hasil = {
        'memberId': memberId,
        'money': money,
        'list Purchased': [],
        'changeMoney': 0
    }
    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } else {
        for (var i = 0; i < sale.length; i++) {
            if (money >= sale[i][1]) {
                hasil['list Purchased'].push(sale[i][0])
                money = money - sale[i][1]
            }
        }
        hasil['changeMoney'] = money
        return hasil
    }

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
