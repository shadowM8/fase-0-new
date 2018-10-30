// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)

//versi 1, memori tidak direset setiap pengulangan

// var number = 10
// var hasil = ''

// for (var i = 0; i < number; i++) {
//     if (number % 2 !== 0 && i % 2 === 0) {
//         hasil += number - i
//     } else if ( number % 2 === 0 && i % 2 !== 0){
//         hasil += number - i
//     }
// }
// for (var j = 0; j <number; j++){
//     console.log(hasil)
// }

// versi 2, bermain di memori dan nested loop

var number = 10
for (var j = 0; j <number; j++){
    var hasil = ''
    for (var i = 0; i < number; i++) {
        if (number % 2 !== 0 && i % 2 === 0) {
            hasil += number - i
        } else if ( number % 2 === 0 && i % 2 !== 0){
            hasil += number - i
        }
    }
    console.log(hasil)
}
