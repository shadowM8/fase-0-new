/**
 Hapus Angka
 -------------------------
 Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
 function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

 contoh:

 input: 'hacktiv8'
 output: 'hacktiv'

 input: '17 Agustus 1945'
 output: 'Agustus'

 RULES:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - DILARANG MENGGUNAKAN method .split()
 */

 /**
  * 
  * algoritma
  * 1. deklarasikan variabel angka dengan nilai '0123456789 ' sebagai pembanding
  * 2. deklarasikan variabel hasil dengan nilai string kosong
  * 3. lakukan loop dengan indeks i dengan limit loop panjang dari parameter sentence
  *   3a. deklarasikan variabel isAngka dengan nilai false
  *   3b. lakukan loop dengan indeks j dengan limit loop panjang dari variabel angka
  *     3ba. jika sentence indeks ke i sama dengan angka indeks ke j maka
  *       3baa. variabel isAngka set nilainya jadi true
  *   3c. Jika variabel isAngka sama dengan false maka
  *     3ca. variabel hasil nilainya sama dengan hasil ditambah sentence ke i
  *   3d. selain itu 
  *     3da. variabel hasil nilainya sama dengan hasil ditambah string kosong
  * 4. kembalikan hasil
  * 
  */

 function hapusAngka(sentence) {
   var angka = '0123456789 '
   var hasil = ''
   for (var i = 0; i < sentence.length; i++) {
     var isAngka = false
     for (var j = 0; j<angka.length; j++){
       if(sentence[i] == angka[j]) {
        isAngka = true
       }       
     }
     if(isAngka === false) {
       hasil += sentence[i]
     }
     else {
       hasil += ''
     }
   }
   return hasil
 }

 console.log(hapusAngka('hacktiv8')); //hacktiv
 console.log(hapusAngka('17 Agustus 1945')); //Agustus
 console.log(hapusAngka('')); //''
