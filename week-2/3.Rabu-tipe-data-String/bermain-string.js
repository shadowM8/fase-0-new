/**
 * 1. Form a sentence
 * input :
 * 
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

output :
JavaScript is awesome and I love it!
 */
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log('soal 1')
console.log('cara pertama dengan + :');
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
console.log('cara kedua dengan concat :');
console.log(word.concat(' ' + second).concat(' ' + third).concat(' ' + fourth).concat(' ' + fifth).concat(' ' + sixth).concat(' ' + seventh))

/**
 2.Index Accessing - 1 by 1
 Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. 
 */
//input
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2]; //wow
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // JavaScript
var thirdWord = word[15] + word[16]; // is
var fourthWord = word[18] + word[19]; // so
var fifthWord = word[21] + word[22] + word[23] + word[24]; // cool
console.log('soal 2')
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//soal ke 3
var word3 = 'wow JavaScript itu keren sekali';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // indeks ke 4 itu abjad J, indeks 14 itu spasi kosong setelah t 
var thirdWord3 = word3.substring(15, 18); // do your own!
var fourthWord3 = word3.substring(19, 24); // do your own!
var fifthWord3 = word3.substring(25, 31); // do your own!

console.log('soal 3')
console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

//soal ke 4
var word4 = 'wow Javascript itu mantap sangat'
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // indeks ke 4 itu abjad J, indeks 14 itu spasi kosong setelah t 
var thirdWord4 = word4.substring(15, 18); // itu 
var fourthWord4 = word4.substring(19, 25); // do your own!
var fifthWord4 = word4.substring(26, 32); // do your own!

//hitung length
var firstLength = exampleFirstWord4.length
var secondLength = secondWord4.length
var thirdLength = thirdWord4.length
var fourthLength = fourthWord4.length
var fifthLength = fifthWord4.length

console.log('soal 4')
console.log('First Word: ' + exampleFirstWord4 + ' with length :' + firstLength);
console.log('Second Word: ' + secondWord4 + ' with length :' + secondLength);
console.log('Third Word: ' + thirdWord4 + ' with length :' + thirdLength);
console.log('Fourth Word: ' + fourthWord4 + ' with length :' + fourthLength);
console.log('Fifth Word: ' + fifthWord4 + ' with length :' + fifthLength);
