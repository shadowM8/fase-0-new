
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
        console.log((i + 1) + '. ' + hasil['first Name'] + ' ' + hasil['last Name'] + ': ', hasil)
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