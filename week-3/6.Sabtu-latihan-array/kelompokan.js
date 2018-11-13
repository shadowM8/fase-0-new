

function pengelompokanAngka(array, parameter) {
    var hasil = []
    for (var i = 0; i < array.length; i++) {
        var indeksSementara = -1
        for (var j = parameter.length - 1; j >= 0; j--) {
            var kelipatan = parameter[j][parameter[j].length - 1]
            if (array[i] % kelipatan === 0) {
                indeksSementara = j

            }
            //  console.log(kelipatan)
        }
        //  console.log(indeksSementara)
        if (indeksSementara !== -1) {
            if (hasil[indeksSementara] === undefined) {
                for (var k = 0; k < parameter.length; k++) {
                    hasil.push([])
                }
            }
            hasil[indeksSementara].push(array[i])
        }
    }
    console.log(hasil)
}

pengelompokanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['kelipatan2', 'kelipatan3']);
/*
  [
    [2,4,6,8,10],
    [3,9]
  ]
 */

pengelompokanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['kelipatan5', 'kelipatan4']);
/**
 [
   [5,10],
   [4,8]
 ]
 */