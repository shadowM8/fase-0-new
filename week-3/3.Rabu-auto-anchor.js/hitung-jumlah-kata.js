function hitungJumlahKata(kalimat) {
    var hasil = []
    var kata = ''
    for (var i = 0; i < kalimat.length; i++) {

        if (kalimat[i] !== ' ') {
            kata += kalimat[i]
            if (i === kalimat.length - 1) {
                hasil.push(kata)
                kata = ''
            }
        } else  {
            if (kata){
                hasil.push(kata)
            }            
            kata = ''
        }

        // console.log(kata)
    }
    return hasil

}

// TEST CASES
console.log(hitungJumlahKata(' I have                                a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5