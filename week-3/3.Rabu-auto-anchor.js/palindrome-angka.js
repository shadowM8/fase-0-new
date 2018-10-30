function angkaPalindrome(num) {
    var isPalindrome = false
    var hasilBalik = ''
    
    if (num < 10) {
        return num + 1
    } else {
        // num harus dicek apakah dia palindrom atau bukan
        var numString = String(num)
        for (var i = 0; i < numString.length; i++){
            hasilBalik += numString[numString.length-1-i]
        }
        // jika num palindrom maka return num , jika num tidak palindrom return angkaPalindrom(num+1)
        if (hasilBalik === numString) {
            return num
        } else {
            return angkaPalindrome(num+1)
        }
        // return hasilBalik
    }

}

//algoritma
/**
 * 1. Pertama tentukan 
 */

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001