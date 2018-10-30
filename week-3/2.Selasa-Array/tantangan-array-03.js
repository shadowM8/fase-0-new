//testcase 1

function dataHandling2(array) {
    
    array.splice(1, 4, array[1] + ' Elsharawy', 'Provinsi ' + array[2], array[3], 'Pria', 'SMA Internasional Metro')
    console.log(array)
    var month = array[3].split('/')
    var bulan = month[1]
    switch (bulan) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Februari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case '10':
            bulan = 'Oktober';
            break;
        case '11':
            bulan = 'November';
            break;
        case '12':
            bulan = 'Desember';
            break;
    }
    console.log(bulan)    
    console.log(month.sort(function (num1, num2) { return num2 - num1 }))    
    console.log(array[3].split('/').join('-'))
    console.log(array[1].slice(0,15))
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// console.log(dataHandling2(input))
dataHandling2(input)
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */