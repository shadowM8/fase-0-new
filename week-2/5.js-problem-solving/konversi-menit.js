function konversiMenit(menit) {
    var hasil = ''
    var digitMenit = Math.round(menit / 60)
    var digitDetik = 0
    if (menit % 60 < 10){
        digitDetik = '0'+ (menit % 60)
    } else {
        digitDetik = menit % 60
    }
    return digitMenit + ":" +digitDetik
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00