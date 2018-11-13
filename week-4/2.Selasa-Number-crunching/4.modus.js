function cariModus(arr) { // mencari angka yang paling sering muncul dari sebuah array
  // deklarasikan variabel modus = 0 , dan frekuensi muncul munculModus dengan 0
  var modus = 0
  var munculModus = 0
  // lakukan loop dengan indeks i dengan limitnya panjang dari parameter arr
  for (var i = 0; i < arr.length; i++) {
    //deklarasikan variabel counter = 1, sebagai penghitung sbrapa sering arr indeks i yang sama muncul
    var counter = 1
    //lakukan loop dengan indeks j yang limitnya adalah panjang dari arr.length, tapi dimulai dari j = i+1
    // kenapa j = i+1? agar arr indeks i tidak dicek dengan arr indeks sebelumnya
    // contoh jika j = 1, saat arr indeks 2 dibandingkan lagi dengan arr indeks ke 1 , akan merusak
    // algoritma yang dirancang, jadi logikanya, karena yang kita cek ini adalah array yang sama
    // agar tidak terjadi dobel maka j = i+1, jadi saat arr i = 2, yang dibandingkan dengan arr i ke 2 hanya
    // arr i yang lebih besar dari i ke 2
    for (var j = i + 1; j < arr.length; j++) {
      // jika arr indeks ke i sama dengan arr indeks ke j maka lakukan
      if (arr[i] === arr[j]) {
        //counter++
        counter++
      }
    }
    // jika counter lebih besar dari munculModus maka
    if (counter > munculModus) {
      //munculModus = counter, dan modusnya sama dengan arr[i]
      munculModus = counter
      modus = arr[i]
    }
  }
  // jika frekuensi munculModus < 2 atau frekuensinya sama dengna panjang berarti ga beres testcasenya wkwk
  if (munculModus < 2 || munculModus === arr.length) {
    return -1
  } else {
    return modus
  }
  
}
/**
 * 
 */
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4

/*
modulus = 4
tampil = 2

10
  counter = 1
  4
  5
  2
  4
  couter = 1
4
  counter = 1
  5
  2
  4
    counter++
  counter = 2
5
  counter = 1
  2
  4
  counter = 1
2
  counter = 1
  4
  counter = 1
4
  counter = 1
*/


console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 5, 10, 10, 6, 10])); // 5