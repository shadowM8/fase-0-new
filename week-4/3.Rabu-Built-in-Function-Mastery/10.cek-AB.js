function checkAB(kalimat) {
    for (var i = 0; i < kalimat.length; i++) {
        for (var j = 0; j < kalimat.length; j++){
            if(kalimat[i]=== 'a' && kalimat[j]=== 'b'){
                var selisih = Math.abs(i-j)
            }
        }
    }
    // console.log(selisih)
    if (selisih === 4) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false