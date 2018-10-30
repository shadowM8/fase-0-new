function ubahHuruf(kata) {
    var abjadReferensi = 'abcdefghijklmnopqrstuvwxyz'
    var hasil = ''
    for(var i = 0; i < kata.length; i++){
        var abjadKonversi = ''
        for (var j = 0; j < abjadReferensi.length; j++){
            if (kata[i]===abjadReferensi[j]){
                abjadKonversi = abjadReferensi[j+1]
            }
        }
        hasil += abjadKonversi
    }
    return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu