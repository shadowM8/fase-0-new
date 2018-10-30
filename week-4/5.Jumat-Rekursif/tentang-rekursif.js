function sorting(arrNumber) {
    // var hasil = []
    var temp = 0
    for (var i = arrNumber.length; i >= 0 ; i--) {
  
      for (var j = 1; j < i; j++) {
        if (arrNumber[j-1] > arrNumber[j]) {
          temp = arrNumber[j]
          arrNumber[j] = arrNumber[j-1]
          arrNumber[j-1] = temp
        }
      }
    }
    return arrNumber
  }