function shoppingTime(memberId, money) {
    var tokoX = new Object()
    tokoX['barang'] = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    tokoX['harga'] = [1500000, 500000, 250000, 175000, 50000]
    // console.log(tokoX['barang'])
    var hasil = new Object()
    hasil['memberId'] = memberId
    hasil['money'] = money
    hasil['listPurchased'] = []    
    if (!hasil['memberId']) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else if (hasil['money'] < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }
    else {
        for (var i = 0; i < tokoX['barang'].length; i++) {
            if (money >= tokoX['harga'][i]) {
                hasil['listPurchased'].push(tokoX['barang'][i])
                money = money - tokoX['harga'][i]
                // changeMoney = money - tokoX['harga'][i]
            }
            // console.log(money)
        }
    }
    hasil['change money'] = money
    return hasil
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