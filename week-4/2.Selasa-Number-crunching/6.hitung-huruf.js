function hitungHuruf(kalimat) {
    var kata = kalimat.split(' ')
    var bandingan = 0
    var kataHasil = ''
    for (var i = 0; i <kata.length; i++){
        // console.log(kata[i])
        var abjad = kata[i]        
        var hurufYangDobel = 0
        for(var j = 0; j < abjad.length; j++){
            // console.log('--',abjad[j])
            var counter = 1
            // var munculHuruf = 1
            
            for (var k = j+1; k<abjad.length; k++){
                // console.log('-->>',abjad[k])
                if (abjad[j]===abjad[k]){
                    counter++
                }
            }
            if (counter > 1){
                // munculHuruf = counter
                hurufYangDobel++
            }
            // console.log(hurufYangDobel)           
        }
        // console.log(hurufYangDobel)
        // console.log(bandingan)           
        if (bandingan < hurufYangDobel) {
            kataHasil = kata[i]
            bandingan = hurufYangDobel
        }
        // console.log(kataHasil)
    }
    return kataHasil
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau