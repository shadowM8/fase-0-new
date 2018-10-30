/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/

/**
 * Algoritma :
 * 1. Tentukan panjang dari string str.
 * 2. Panjang dari string str (str.length) digunakan sebagai batas dari looping yang akan dilakukan
 * 3. Looping di sini melooping tiap 2 angka , jika 2 angka ini genap masukkan ke arrayTemp
 * 4. setelah proses looping, didapatkan pasangan genap pada arrayTemp
 * 5. lakukan looping untuk menjumlahkan pasangan genap pada arrayTemp.
 */

function evenPairsSum(str) {
  // Code disini
  var strTemp = ''
  var strTempGanjil = ''
  var arrayTemp = []
  var hasil = 0
  for (var i = 0; i < str.length; i += 2) {
    strTemp = str[i] + str[i + 1]
    if (str.length % 2 !== 0) {
      strTempGanjil = str[str.length - 1] + str[0]
    }
    if (strTemp % 2 === 0) {
      arrayTemp.push(strTemp)
    }

  }
  if (strTempGanjil % 2 === 0 && strTempGanjil !== strTemp) {
    arrayTemp.push(strTempGanjil)
  }
  for (var j = 0; j < arrayTemp.length; j++) {
    hasil = hasil + Number(arrayTemp[j])
  }
  return hasil
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23674266201')); // 140
console.log(evenPairsSum('2478201')); // 134
