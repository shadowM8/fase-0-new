
function segitigaSamaKaki(number) {
    var hasil = ''
    for (var i = 0; i < number; i++) {
        for (var j = number - i - 1; j < number; j++) {
            hasil += '#'
        }
        hasil += '\n'
    }
    console.log(hasil)

    // for (var i = 0; i < number; i++) {
    //     var hasil = ''
    //     for (var j = number - i - 1 ; j < number; j++) {
    //         hasil += '#'
    //     }
    //     console.log(hasil)
    // }    
}
// segitigaSamaKaki(5)

function segitigaSamaSisi(number) {
    var hasil = ''
    for (var i = 0; i < number; i++) {
        for (var j = 0; j < number + 2; j++) {
            // hasil += '# '
            if (j < number - 1 - i || j >= number + i){
                hasil += '  '
            } else {
                hasil += '# '
            }
        }
        // hasil += '\n'
        if (i !== number-1){
            hasil += '\n'
        }
    }
    console.log(hasil)
}
segitigaSamaSisi(3)