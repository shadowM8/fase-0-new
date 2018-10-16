function splitDanHitung(string) {
    var hasil = ''
    var splitInput = string.split(' ')  // split string jadi array berdasar spasi karena yang dcari adalah kata
    for (var i = 0; i < splitInput.length; i++) {
        hasil += 'kata ke-' + (i+1) + ' : ' + splitInput[i] + ' dengan panjang : '+ splitInput[i].length

        if (!(splitInput[i + 1] === undefined)) {   //jika indeks i = BUKAN indeks terakhir dari splitInput maka lakukan dalam if
            hasil += '\n'                           // jika !(splitInput[i+1] == undefined) = BUKAN indeks terakhir (! = negasi)
        }
    }
    return hasil
}

//testcase 1
// console.log(splitDanHitung('JavaScript is awesome and I love it!'))
//testcase 2
console.log(splitDanHitung('Wow JavaScript is awesome and cool'))