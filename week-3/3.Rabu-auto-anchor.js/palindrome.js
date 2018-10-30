function palindrome(kata) {
    var hasilBalik = ''
    for (var i = 0; i < kata.length; i++){
        hasilBalik += kata[kata.length-1-i]
    }
    if (hasilBalik === kata) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false  