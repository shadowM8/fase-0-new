function totalDigitRekursif(angka) {
    var angkaString = angka.toString()
    if (angkaString.length === 0){
        return 0
    }
    else {
        return Number(angkaString[0]) + totalDigitRekursif(angkaString.slice(1))
    }
  }
// var arr = [0, 1, 2, 3, 4];
// var irisan1 = arr.slice(arr.length-1);
// console.log(irisan1) 
// console.log(arr)

  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5