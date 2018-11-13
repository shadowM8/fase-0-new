// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

/**
 * 
 * ALGORITMA
 * 1. deklarasikan variabel counterStop dengan nilai 0 untuk menghitung berapa kali nenekPenyihir dan pit hitam muncul
 * 2. deklarasikan variabel counterHadiah dengan nilai 0 untuk menghitung berapa kali hadiah muncul sebelum disetop 3 kali oleh pit hitam atau penyihir
 * 3. Lakukan loop dengan indeks i dengan limit loop adalah panjang array path, 
 *  3a. Jika path indeks ke i sama dengan 'Pit Hitam' ATAU path indeks ke i sama dengan 'Nenek Penyihir' maka
 *    3aa. Tambah nilai counterStop dengan nilai 1
 *  3b. Jika path indeks ke i sama dengan 'Hadiah' DAN nilai counterStop lebi kecil atau sama dengan 2 maka
 *    3ba. Tambah nilai counterHadiah dengan nilai 1
 * 4. Jika counterStop nilainya lebih besar dari 2, maka
 *  4a. tampilkan 'Be brave, next time! But its okay, you got ' + counterHadiah + ' present(s)'
 * 5. Selain itu , maka
 *  5a. tampilkan 'Yeaaayyy, you got all presents: ' + counterHadiah
 */

function merryChristmas(path) {
  var counterStop = 0
  var counterHadiah = 0
  for (var i = 0; i < path.length; i++) {

    if (path[i] === 'Pit Hitam' || path[i] === 'Nenek Penyihir') {
      counterStop++
    }
    if (path[i] === 'Hadiah' && counterStop <= 2 ) {
      counterHadiah++
    }
  }
  if (counterStop > 2) {
    return 'Be brave, next time! But its okay, you got ' + counterHadiah + ' present(s)'
  }
  else  {
    return 'Yeaaayyy, you got all presents: ' + counterHadiah
  }
}

console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*', 'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir', 'Hadiah', '*', 'Hadiah', 'Pit Hitam', 'Hadiah']));
