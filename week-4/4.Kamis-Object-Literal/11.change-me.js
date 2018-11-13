/**
 * 
 * algoritma function changeMe
 * 1. function changeMe berfungsi untuk mengubah array 2 dimensi menjadi string yang tertata rapi
 * 2. lakukan looping dengan indeks i dengan limit loopnya adalah panjang array parameter 
 *  2a. buat variabel hasil sebagai objek baru
 *  2b. Dari objek hasil bikin keys 'first Name' yang valuenya adalah arr indeks ke i indeks ke 0
 *  2c. Dari objek hasil bikin keys 'last Name' yang valuenya adalah arr indeks ke i indeks ke 1
 *  2d. Dari objek hasil bikin keys 'gender' yang valuenya adalah arr indeks ke i indeks ke 2
 *  2e. Jika arr indeks ke i indeks ke 3 sama dengan undefined maka
 *      2ea. dari objek hasil bikin keys 'age' yang valuenya adalah 'invalid date year'
 *  2f. Selain itu maka
 *      2fa. dari objek hasil bikin keys 'age' yang valuenya adalah arr indeks ke i indeks ke 3
 * 3. cetak hasil sesuai dengan output yang diinginkan
 */
function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        var hasil = new Object()
        hasil['first Name'] = arr[i][0]
        hasil['last Name'] = arr[i][1]
        hasil['gender'] = arr[i][2]
        // hasil['age'] = arr[i][3]
        if (arr[i][3] === undefined) {
            hasil['age'] = 'Invalid Date Year'
        } else {
            hasil['age'] = 2018 - arr[i][3]
        }

        // (i + 1) + '. ' + hasil['first Name'] + ' ' + hasil['last Name'] + ': ' + hasil
        console.log((i + 1) + '. ' + hasil['first Name'] + ' ' + hasil['last Name'] + ': \n', hasil)
        // console.log(hasil)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""