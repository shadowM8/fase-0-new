/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

/**
 * 
 * ALGORITMA
 * 1. deklarasikan variabel hasil dengan nilai 0 
 * 2. lakukan loop dengan indeks i dimulai dari 0 dengan limitnya adalah panjang array params
 *  2a. lakukan loop dengan indeks j dimulai dari 0 dengan limitnya adalah panjang array params yang ke i
 *    2aa. jika nilai params indeks i indeks j memiliki panjang 3 DAN tipe params indeks i indeks j adalah number maka
 *      2aaa. hasil sama dengan hasil ditambahkan params indeks i indeks j
 * 3. kembalikan nilai hasil
 */

function sumThree(params) {
  var hasil = 0
  for (var i = 0; i < params.length; i++){
    for (var j = 0; j < params[i].length;j++){
      if(String(params[i][j]).length === 3 && typeof params[i][j] === "number") {
        hasil += params[i][j]
      }
    }
  }
  return hasil
}

console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201, true] ])); //543
