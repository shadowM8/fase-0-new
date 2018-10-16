function counterKondisional(number, counter) {
    var hasil = ''
    if (counter < 2) {
        for (var i = 1; i <= number; i++) {
            if (i % 2 !== 0) {
                hasil += 'ganjil'
            } else {
                hasil += 'genap'
            }
            if (i !== number) {
                hasil += '\n'
            }
        }
    }
    else {
        
        for (var i = 1; i <= number; i += counter) {
            if (i % (counter + 1) === 0) {
                hasil += i + ' kelipatan ' + (counter + 1)
            }
            if (i !== number && i % (counter + 1) === 0) {
                hasil += '\n'
            }
        }
    }
    return hasil
}

//testcase 1
// console.log(counterKondisional(5, 1))
//testcase 2
// console.log(counterKondisional(100, 2))
// console.log(counterKondisional(100, 5))
console.log(counterKondisional(100, 9))