function loopBolakBalik(number) {
    var hasil = ''
    if (number % 2 !== 0) {
        return 'mohon input nomor genap'
    }
    for (var i = 0; i <= number; i += 2) {
        if (i % 2 === 0 && i !== 0) {
            hasil += i + ' - I love coding'
        } else if (i === 0) {
            hasil += 'LOOPING PERTAMA'
        }
        if (!(i === number)) {
            hasil += '\n'
        }
    }
    hasil += '\n'
    for (var i = number+2; i > 0; i += -2) {
        if (i % 2 === 0 && i !== number+2) {
            hasil += i + ' - I will become developer'
        } else if ( i === number+2) {
            hasil += 'LOOPING KEDUA'
        }
        if (!(i === 2)) {
            hasil += '\n'
        }
    }
    return hasil
}



console.log(loopBolakBalik(22))
// output :
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer