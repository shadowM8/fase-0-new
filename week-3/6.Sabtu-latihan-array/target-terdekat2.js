console.log(jarakTerdekat('o---x-x--o--x')); // 3
console.log(jarakTerdekat('o---x-ox--o--x-')); // 1
// gunakan 1 looping saja
//2 loop

function jarakTerdekat(string) {
    var selisih = 0
    var bandingan = 100
    var lokasiO = []
    var lokasiX = []
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'o') {
            var posisiO = Number(i)
            lokasiO.push(i)
        } else if (string[i] === 'x') {
            var posisiX = Number(i)
            lokasiX.push(i)
        }
        selisih = Math.abs((posisiO - posisiX))
        if (selisih < bandingan) {
            bandingan = selisih
        }
    }
    // for (var i = 0; i <)

    //     selisih = Math.abs((posisiO - posisiX))
    return bandingan
}