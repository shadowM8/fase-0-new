/**
 Buatlah sebuah function drawPattern yang menerima 1 parameter berupa angka
 Angka tersebut mewakili panjang dan lebar pattern yang akan dibuat
 pada setiap baris ganjil maka kolom genapnya akan dicetak pola `/`
 pada setiap baris genap maka kolom ganjilnya dicetak pola '\'

 contoh 1:
 ----------------------------
 drawPattern(3)

 Output
 ---
  / 
 \ \
  / 

 contoh 2:
 ----------------------------
 drawPattern(2)
 /
\

 */


//Put your code here
function drawPattern(number) {
    var hasil = ''
    for (var i = 0; i < number; i++) {
        if (i % 2 === 0) {
            for (var j = 0; j < Math.floor(number / 2); j++) {
                //saat baris ganjil , berarti indexnya genap  --> cetak / sebanyak number /2
                hasil += '/ '
            }
        } else if (i % 2 !== 0) {
            for (var k = 0; k < Math.ceil(number / 2); k++) {
                //saat baris ganjil , berarti indexnya genap  --> cetak / sebanyak number /2
                hasil += '\\ '
            }
        }
        hasil += '\n'

    }
    console.log(hasil)
}


//Test case
drawPattern(5)
/*
Output:
---
 / / 
\ \ \ 
 / / 
\ \ \ 
 / / 
 
*/

// drawPattern(6)
/*
Output:
---
 / / /
\ \ \ 
 / / 
\ \ \ 
 / / /
\ \ \ 
*/

// drawPattern(7)
/*
Output:
---
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
*/