
/**
Graduates Count

Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.

Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong

Aturan coding:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - Dilarang menggunakan built-in function:
    - .map()
    - .filter()
    - .reduce()
*/

/**
 * 
 * algoritma
 * 1.deklarasikan variabel hasil dengan nilai 0
 * 2.deklarasikan variabel nilaiLulus dengan nilai 75
 * 3.lakukan loop dengan indeks i dengan limit loop yaitu panjang dari array scores
 *  3a. jika scores indeks ke i lebih besar atau sama dengan nilaiLulus maka
 *    3aa. hasil sama dengan hasil ditambah 1
 * 4.Jika panjang array scores sama dengan 0 maka 
 *  4a. kembalikan 'data kosong'
 * 5.Selain itu jika hasil sama dengan panjang array scores maka
 *  5a, kembalikan 'semua orang lulus'
 * 6.Selain itu jika hasil sama dengan 0 maka
 *  6a. kembalikan 'tidak ada yang lulus'
 * 7.Selain itu maka
 *  7a. kembalikan hasil + 'orang lulus'
 */

function graduatesCount (scores) {
  var hasil = 0
  var nilaiLulus = 75
  for (var i = 0; i < scores.length; i++){
    if(scores[i] >= nilaiLulus) {
      hasil++
    }
  }
  if(scores.length === 0) {
    return 'Data kosong'
  }
  else if (hasil === scores.length) {
    return 'Semua orang lulus'
  }
  else if (hasil === 0) {
    return 'Tidak ada yang lulus'
  }  
  else {
    return hasil + ' orang lulus'
  }
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
