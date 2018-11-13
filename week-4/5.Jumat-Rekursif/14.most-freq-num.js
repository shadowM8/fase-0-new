function sorting(arrNumber) {
  // var hasil = []
  for (var i = 1; i < arrNumber.length; i++) {
    var temp = 0
    for (var j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j-1] > arrNumber[j]) {
        temp = arrNumber[j]
        arrNumber[j] = arrNumber[j-1]
        arrNumber[j-1] = temp
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  var angkaTerbesar = 0
  var frekuensi = 0
  for (var i = 0; i <arrNumber.length; i++){
    for (var j = 0; j <arrNumber.length; j++){
      if(arrNumber[j] > angkaTerbesar){
        angkaTerbesar = arrNumber[j]
      }
    }
    if(arrNumber[i] === angkaTerbesar){
      frekuensi += 1
    }
  }
  if (angkaTerbesar === 0){
    return ''
  } else {
    return 'angka paling besar adalah '+angkaTerbesar+' dan jumlah kemunculan sebanyak '+frekuensi+' kali'
  }
  
}

function mostFrequentLargestNumbers(arrNumber) {
  //algoritmanya cukup jelas
  //1. sorting arrNumber, 2. stelah disort, cari unsur dari arrNumber yang nilainya paling besar dan brapa
  // kali dia muncul 3. return countHighest
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  // return countHighest;
  return countHighest
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//   //''