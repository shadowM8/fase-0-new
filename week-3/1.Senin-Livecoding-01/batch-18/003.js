/**
--------------------
String Manipulators!
--------------------
Buatlah beberapa function berikut:
1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'
2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'
3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'
RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring
*/

function addTitle(name1, name2, name3, name4) {
    // return 'Mr. '+name1+', Mr. '+name2+', Mr. '+name3+', Mr. '+name4
    console.log('Mr. ' + name1 + ', Mr. ' + name2 + ', Mr. ' + name3 + ', Mr. ' + name4)
}

addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')

function changeSpacesWith(str, to) {
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            hasil += to
        } else {
            hasil += str[i]
        }
        
        // console.log(hasil)
    }
    console.log(hasil)
}

changeSpacesWith('Steve Fox', '-')
changeSpacesWith('Sergei Dragunov Ivankov', '+')

function cutString(str) {
    var hasil = ''
    for (var i = 0; i < 6; i++){
        hasil += str[i]
    }
    console.log(hasil)
}

cutString('Kazuya Mishima')
cutString('Dimitri W')