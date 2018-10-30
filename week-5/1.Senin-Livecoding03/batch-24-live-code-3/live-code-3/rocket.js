/*
------------------------
Count Letter Recursively
------------------------
PROBLEM
========
Tersedia 2 input: suatu kata dan suatu huruf
Carilah berapa kali huruf muncul di dalam kata.
Gunakan rekursif untuk menyelesaikan soal ini.
Contoh
1) sentence = 'the quick brown fox', letter = 'o'    -->     2
RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function countLetterRecursive
- Dilarang menggunakan looping (while, for, do-while, dan lain-lain)
*/

function countLetterRecursive(sentence, letter) {
  // hanya code disini!
  if (!sentence){
    return 0
  } else {
    if (sentence[0] === letter){
      return 1 + countLetterRecursive(sentence.slice(1), letter)
    }else {
      return 0 + countLetterRecursive(sentence.slice(1), letter)
    }
  }
}

console.log(countLetterRecursive('12104123', '1')); // 3
console.log(countLetterRecursive('the quick brown fox', 'o')); // 2
console.log(countLetterRecursive('lorem ipsum', 'a')); // 0
console.log(countLetterRecursive('hahaha', 'h')); // 3
console.log(countLetterRecursive('', 'x')); // 0

//karena ga boleh looping, supaya fungsinya berjalan, parameternya akan dimodifikasi tiap kali fungsi berjalan
/**
 *  logik =  * 
 * countLetterRecursive ('12104123', '1') cek indeks paling depan, apakah sama dengan 1, jika sama return 1 + fungsi
 *     1   +    countLetterRecursive ('2104123', '1') // 2 !== 1, jika tidak return 0 + fungsi rekurs
 *     1   +    0 +   countLetterRecursive ('104123', '1') // 1 === 1 , return 1 + fungsi rekurs
 *     1   +    0 +    1 +    countLetterRecursive ('04123', '1')// 0 !== 1 , return 0 + fungsi rekurs
 *     1   +    0 +    1 +   0  +   countLetterRecursive ('4123', '1')// 0 !== 1 , return 0 + fungsi rekurs
 *     1   +    0 +    1 +   0  +   0   +   countLetterRecursive ('123', '1')// 1 === 1 , return 1 + fungsi rekurs
 *     1   +    0 +    1 +   0  +   0   +   1   +  countLetterRecursive ('23', '1')// 2 !== 1 , return 0 + fungsi rekurs
 *     1   +    0 +    1 +   0  +   0   +   1   +  0  +   countLetterRecursive ('3', '1')// 3 !== 1 , return 0 + fungsi rekurs
 *     1   +    0 +    1 +   0  +   0   +   1   +  0  +   0  +  countLetterRecursive ('', '1')// '' !== 1 , return 0 dan stop
 * 
 * counter = 1 + 1 + 1 = 3  
 */
