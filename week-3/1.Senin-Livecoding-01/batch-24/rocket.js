/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
xo
x

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xox
xo
x

*/

function drawLadder(row) {
  var hasil = ''
  for (var i = 0; i < row; i++) {
    if (i < Math.round(row / 2) ) {
      for (var j = row - i - 1; j < row; j++) {
        if (j % 2 === 0) {
          hasil += 'x'
        } else {
          hasil += 'o'
        }
      }
    }
    else {
      for (var j = 0; j < row - i; j++) {
        if (j % 2 === 0) {
          hasil += 'x'
        } else {
          hasil += 'o'
        }
      }
    }
    hasil += '\n'
  }
  console.log(hasil)
}

drawLadder(6);
console.log('----------')
drawLadder(3);
