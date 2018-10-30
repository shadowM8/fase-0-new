/**

Reverse All

Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

*/

function reverseAll(arr) {
  // Code disini
  var arrayHasil = []
  for (var i = arr.length - 1; i >= 0; i--) {
    var stringBalik = ''
    for (var j = arr[i].length - 1; j >= 0; j--) {
      stringBalik = stringBalik + arr[i][j]
    }
    arrayHasil.push(stringBalik)
  }
  if (arr.length == 0) {
    return []
  }
  return arrayHasil
}


console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
