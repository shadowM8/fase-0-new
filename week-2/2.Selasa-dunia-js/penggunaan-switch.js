// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

var tanggal = 11; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1911; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
}

// console.log(tanggal, bulan, tahun) // 
// console.log(tanggal+ bulan +tahun) //no spasi
console.log(tanggal+' '+bulan+' '+tahun)

