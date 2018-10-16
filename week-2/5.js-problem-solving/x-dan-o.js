function xo(str) {
    if (str.length % 2 !== 0) {
        return false
    }
    var count = 0
    var count2 = 0
    for (var i = 0; i <str.length; i++){
        if (str[i]==='x'){
            count++
        } else {
            count2++
        }
    }
    if (count === count2){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true