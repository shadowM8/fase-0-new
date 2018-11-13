/**
 * 
 * Algoritma
 * 1. tujuan rekursif yaitu hasil dari return adalah function itu sendiri maka
 * 2. deklarasikan variabel hasilKali dengan nilai 1, karena kita akan mengalikan jika pake 0 ga jadi ntar
 * 3. karena kita ingin mengalikan unsur unsur dari angka misal 512 = 5*1*2, untuk mengakses masing2 pada 
 * 4. variabel tipe number tidak bisa, maka kita set variabel angkaString dengan konversi dari parameter angka
 * 5. Format rekursif yaitu terakhirnya direturn sendiri, menggunakan kondisional dalam pengerjaan functionnya
 * 6. Dan kondisi pertama merupakan kondisi best case / worst case yang pada akhirnya digunakan untuk menghenti
 * 7. -kan function tersebut dari loop yang terjadi akibat return function itu sendiri.
 * 8. Jika panjang dari angkaString sama dengan 0 maka
 *  8a. return 1
 * 9. Selain itu , maka
 *  9a. Lakukan loop dengan indeks i dengan limitnya adalah panjang dari angkaString
 *      9aa. hasilKali sama dengan hasilKali * angkaString indeks ke i yang dikonversikan ke number
 *  9b. Jika panjang dari hasilKali yang sudah dikonversikan ke string lebih besar dari 1 maka
 *      9ba. return kaliTerusRekursif(hasilKali)
 *  9c. Selain itu maka
 *      9ca. return hasilKali
 */ 

function kaliTerusRekursif(angka) {
    var angkaString = angka.toString()
    var hasilKali = 1
    if (angkaString.length === 0){
        return 1
    }
    else {
        for ( var i = 0; i <angkaString.length; i++){
            hasilKali = hasilKali * Number(angkaString[i])
        }
        if(hasilKali.toString().length > 1){
            return kaliTerusRekursif(hasilKali)
        } else {
            return hasilKali
        }
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6