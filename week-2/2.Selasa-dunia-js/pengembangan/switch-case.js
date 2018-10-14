function month(num) {
    switch (num) {
        case 1:
            return 'Januari';
        case 2:
            return 'Februari';
        case 3:
            return 'Maret';
        case 4:
            return 'April';
        case 5:
            return 'Mei';
        case 6:
            return 'Juni';
        case 7:
            return 'Juli';
        case 8:
            return 'Agustus';
        case 9:
            return 'September';
        case 10:
            return 'Oktober';
        case 11:
            return 'November';
        case 12:
            return 'Desember';
    }
}

function dateCreator(tanggal, bulan, tahun) {
    bulanHuruf = month(bulan)
    // console.log(tanggal+' '+bulan+' '+tahun)
    if (tanggal > 0 && tanggal < 32) {
        if (bulan > 0 && bulan < 13) {
            if (tahun > 1899 && tahun < 2200) {
                var hasil = tanggal + ' ' + bulanHuruf + ' ' + tahun
            }
        }
    } else {
        return "salah input tanggal"
    }

    return hasil
}

console.log(dateCreator(11, 1, 1911))
