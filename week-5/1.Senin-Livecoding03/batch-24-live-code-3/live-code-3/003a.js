/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

/**
 * parameter users isinya array of object
 * 1. jadi yang pertama dilakukan yaitu membuat objek output beserta keyName yang diperlukan
 * 2. Lakukan looping yang fungsinya untuk membuat 
 * 
 */
function pemecahTanggal(string) {
    var hasilTanggal = ''
    hasilTanggal = string.split("-").join('')
    return hasilTanggal
}
function penukarHuruf(string) {        
    var strTemp = ''
    for (var i = 0; i < string.length; i += 2) {
        if (string[i + 1] !== undefined) {
            strTemp = strTemp + string [i+1] + string [i]
        } else {
            strTemp = strTemp + string [i]
        }        
    }
    return strTemp
}

function addValidationCode(users) {
    var hasil = []    
    var simpanNama = []  
    
    for (var i = 0; i < users.length; i++) {
        var obj = {}
        obj.name = users[i].name
        simpanNama[i] = penukarHuruf(users[i].name)
        users[i]['join date'] = pemecahTanggal(users[i]['join date'])        
        obj.validationCode = simpanNama[i] + users[i]['join date']
        hasil.push(obj)
        // hasil[i].name = users[i].name
        // users[i]['join date'] = pemecahTanggal(users[i]['join date'])
        // simpanNama[i] = penukarHuruf(users[i].name)
        // hasil[i].validationCode = simpanNama[i] + users[i]['join date']
    }
    return hasil
}


//Test case
console.log(addValidationCode([
    {
        name: 'Antonio',
        'join date': '09-08-2018'
    },
    {
        name: 'Banderaz',
        'join date': '10-08-2018'
    },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
console.log(addValidationCode([
    {
        name: 'Cecile',
        'join date': '01-02-2018'
    },
    {
        name: 'Dominique',
        'join date': '10-09-2018'
    },
]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
console.log(addValidationCode([]));
  /**
   Hasil Output
   []
   */
