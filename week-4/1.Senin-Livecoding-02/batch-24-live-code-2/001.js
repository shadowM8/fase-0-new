/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

/**
 * Algoritma 001.js  -Anton Wibisono-
 * 1. Pertama-tama, cek array yang dijadikan sebagai parameter, cari tahu berapa panjang array parameter.
 * 2. Setelah mengetahui panjang array parameter, langkah selanjutnya yaitu, cek nilai-nilai di dalam array parameter tersebut.
 * 3. Pengecekan nilai dalam array parameter menggunakan kondisional untuk tiap tiap nilai di dalam array parameter.
 * 4. Setelah nilai-nilai dalam array parameter tersebut dicek, masukkan hasil pengecekan tersebut ke dalam array baru sebagai array hasil pengecekan.
    * 4a. Jika nilai pada array ditemukan sebagai Bakugo, masukkan nilai baru ke dalam arrayBakugo
    * 4b. Jika nilai pada array dtemukan sebagai Midoriya, masukkan nilai baru ke dalam arrayMidoriya
    * 4c. Jika nilai pada array dtemukan sebagai Todoroki, masukkan nilai baru ke dalam arrayTodoroki
    * 4d. Jika nilai pada arraya ditemukan sebagai kosong, kembalikan result dengan "There is no clear winner"
 * 5. Dari array hasil tersebut, dapat ditentukan output yang diinginkan dari soal, dengan melihat nilai dari kondisi mana yang jumlahnya memenuhi syarat.
 * 6. JIKA panjang arrayBakugo (arrayBakugo.length) nilainya LEBIH BESAR dari panjang arrayMidoriya DAN panjang arrayBakugo nilainya LEBIH BESAR dari panjang arrayTodoroki maka masuk ke 6a.
 *    6a. Kembalikan result dengan nilai "Bakugo won the tournament"
 * 7. JIKA panjang arrayMidoriya  nilainya LEBIH BESAR dari panjang arrayBakugo DAN panjang arrayMidoriya nilainya LEBIH BESAR dari panjang arrayTodoroki maka masuk ke 7a.
 *    7a. Kembalikan result dengan nilai "Midoriya won the tournament"
 * 8. JIKA panjang arrayTodoroki  nilainya LEBIH BESAR dari panjang arrayMidoriya DAN panjang arrayTodoroki nilainya LEBIH BESAR dari panjang arrayBakugo maka masuk ke 8a.
 *    8a. Kembalikan result dengan nilai "Todoroki won the tournament"
 * 9 SELAIN ITU kembalikan result dengan nilai "There is no clear winner"
 */

function absoluteWinner(winners) {
  //Your code here!
  var arrayBakugo = []
  var arrayMidoriya = []
  var arrayTodoroki = []
  var result = ''
  for (var i = 0; i < winners.length; i++) {
    if (winners[i] === 'Bakugo') {
      arrayBakugo.push("bakugo win this round")
    } else if (winners[i] === 'Midoriya') {
      arrayMidoriya.push("midoriya win this round")
    } else if (winners[i] === 'Todoroki') {
      arrayTodoroki.push("Todoroki win this round")
    } else if (!winners[i]) {
      return "There is no clear winner"
    }
  }
  if (arrayBakugo.length > arrayMidoriya.length && arrayBakugo.length > arrayTodoroki.length) {
    result = 'Bakugo won the tournament!'
  } else if (arrayMidoriya.length > arrayBakugo.length && arrayMidoriya.length > arrayTodoroki.length) {
    result = 'Midoriya won the tournament!'
  } else if (arrayTodoroki.length > arrayBakugo.length && arrayTodoroki.length > arrayMidoriya.length) {
    result = 'Todoroki won the tournament!'
  } else {
    return "There is no clear winner"
  }
  return result
}

console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"
