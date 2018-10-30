/*
==================================
Array Mastery: Largest Number
==================================

[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999,
dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 5

[RULE]
- Wajib menuliskan algoritma. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built-in function .MAX dan .apply
*/

/**
 * 1. pertama-tama, cari panjang array dari numbers. Lalu buat array kosong sebagai tempat proses perulangan.
 * 2. dari array numbers, lakukan perbandingan antar masing - masing nilai dalam array number tersebut.
 * 3. JIKA nilai ke-i lebih besar daripada nilai ke-(i+1) ATAU nilai ke i-1 lebih kecil daripada nilai ke i
 *    3a. LAKUKAN push(i) ke dalam arrayHasil
 * 4. kembalikan indeks ke 0 dari arrayHasil
 * 
 */

function largestNumber(numbers) {
  // Code here
  var arrayHasil = []
  for (var i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1] || numbers[i-1] < numbers[i]) {
      arrayHasil.push(numbers[i])
    }
  }
  return arrayHasil[0]
}


// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321
