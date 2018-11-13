/**
 * 
 Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
 */

 /**
  * 
  * ALGORITMA untuk menghitung profit dari variabel array listBarang yang isinya adalah nama barang, harga , dan stoknya dengan parameternya adalah array yang berisikan objek pembeli, output yang diinginkan adalah array yang berisikan objek yang objek tersebut memiliki properti nama barang, siapa yang membeli, sisa stok berapa dan berapa total profitnya
  * 1. deklarasikan variabel hasil dengan nilainya array kosong
  * 2. lakukan loop dengan indeks i dan limit loop adalah panjang dari array listBarang, karena output yang diinginkan adalah objeknya setiap listBarang
  *     2a. deklarasikan variabel produk sebagai objek yang memiliki property antara lain
  *         2aa. deklarasikan keys product dengan nilainya adalah listBarang indeks ke i indeks ke 0
  *         2ab. Deklarasikan keys shoppers dengan nilainya adalah array kosong
  *         2ac. Deklarasikan keys leftOver dengan nilainya adalah listBarang indeks ke i indeks ke 2
  *         2ad. Deklarasikan keys totalProfit dengan nilainya adalah 0
  *     2b. Lakukan loop dengan indeks j dan limit loop adalah panjang dari parameter array shoppers, loop ini untuk mencari siapa saja shoppers yang membeli product ke i, berapa barang yang dibeli, dan sisa barang berapa, semua akan diperhitungkan dalam loop indeks ke j ini.
  *         2ba. Jika shoppers[j].product sama dengan produk['product'] maka 
  *             2baa. listBarang indeks ke i indeks ke 2 (stok barang awal) sama dengan listBarang indeks ke i indeks ke 2 dikurangkan dengan shoppers[j].amount
  *             2bab. Jika listBarang indeks ke i indeks ke 2 jumlahnya lebih besar atau sama dengan 0 maka
  *                 2baba. produk['leftOver'] = produk['leftOver'] - shoppers[j].amount
  *                 2babb. produk['shoppers'].push(shoppers[j].name)
  *                 2babc. produk['totalProfit'] = produk['totalProfit'] + listBarang[i][1] * shoppers[j].amount
  *    2c. hasil.push(produk)
  * 3.return hasil
  */

function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    var hasil = []
    for (var i = 0; i < listBarang.length; i++) {
        var produk = {
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0,
        }
        for (var j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === produk.product) {
                // produk[shoppers].push(shoppers[j].name)
                listBarang[i][2] = listBarang[i][2] - shoppers[j].amount
                // produk['leftOver'] = produk['leftOver'] - shoppers[j].amount
                if (listBarang[i][2] >= 0) {
                    produk['leftOver'] = produk['leftOver'] - shoppers[j].amount
                    produk['shoppers'].push(shoppers[j].name)
                    produk['totalProfit'] += (shoppers[j].amount * listBarang[i][1])
                }
            }
        }
        hasil.push(produk)
    }
    return hasil

}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]