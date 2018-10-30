function targetTerdekat(arr) {
    var indeksO = []
    var indeksX = []
    // cari indeks dari o dan x
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indeksO.push(i)
        }
        else if (arr[i] === 'x') {
            indeksX.push(i)
        }
    }
    // return indeksX[0]
    // cari selisih yang paling kecil
    var selisihOX = 0
    for (var i = 0; i < indeksX.length; i++){
        selisihOX = Math.abs(indeksX[0]-indeksO[0])
        var selisihBanding = Math.abs(indeksX[i]-indeksO[0])
        if (selisihOX > selisihBanding){
            selisihOX = selisihBanding
        }
    }
    return selisihOX
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2