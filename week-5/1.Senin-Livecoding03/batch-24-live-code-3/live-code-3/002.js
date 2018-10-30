/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.

Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']

- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
  
Aturan coding:
  DILARANG menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

function arrayMerge(firstData, secondData) {
  // Code disini
  var arrayTemp = []
  var arrayTempBandingan = []
  var arrayHasil = []
  for (var i = 0; i < firstData.length; i++) {
    for (var j = 0; j < secondData.length; j++) {}
    if (firstData[i] !== secondData[j]) {
      arrayTemp.push(firstData[i])
      arrayTempBandingan.push(firstData[i])
    }
  }
  for (var j = 0; j < secondData.length; j++) {
    if (firstData[i] !== secondData[j]) {
      arrayTemp.push(secondData[j])
      arrayTempBandingan.push(secondData[j])
    }
  }
  for (var k = 0; k < arrayTemp.length; k++) {
    if (arrayTemp[k] === arrayTemp[k + 1]) {
      arrayHasil.push(arrayTemp[k+1])
    } else {
      arrayHasil.push(arrayTemp[k])
    }
  }

  return arrayHasil
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']

// console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

// console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

// console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

// console.log(arrayMerge([], []));
// // []
