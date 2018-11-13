/**
 * 
 * algoritma function naikAngkot yang parameternya adalah array of array dan outputnya berupa array of object yang objectnya adalah detail data penumpang
 * 1. deklarasikan variabel hasil dengan array kosong
 * 2. lakukan loop dengan indeks i dengan batas loop adalah panjang array parameter
 *  2a. deklarasikan variabel dataPenumpang sebagai objek dengan property sebagai berikut
 *      2aa. deklarasikan keys penumpang dengan arrPenumpang [i][0]
 *      2ab. deklarasikan keys naikDari dengan arrPenumpang [i][1]
 *      2ac. deklarasikan keys tujuan dengan arrPenumpang [i][2]
 *      2ad. deklarasikan keys bayar dengan 0
 *  2b. untuk menghitung keys bayar, lakukan loop dengan indeks j dengan batas loop adalah panjang dari array rute
 *      2ba. Jika rute indeks ke j sama dengan keys naikDari maka
 *          2baa. variabel indeksAwal = j
 *      2bb. Selain itu jika rute indeks ke j sama dengan keys tujuan maka
 *          2bab. variabel indeksAkhir = j
 *  2c. keys bayar sama dengan (indeksAkhir - indeksAwal) dikalikan dengan 2000
 *  2d. push object dataPenumpang ke dalam array hasil
 * 3. return hasil
 */

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var dataPenumpang = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        //menghitung ongkos angkot dari rute yang berbeda beda
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === dataPenumpang['naikDari']) {
                var indeksAwal = j
            } else if (rute[j] === dataPenumpang['tujuan']) {
                var indeksAkhir = j
            }
        }
        dataPenumpang['bayar'] = (indeksAkhir - indeksAwal) * 2000
        hasil.push(dataPenumpang)
    }
    return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]