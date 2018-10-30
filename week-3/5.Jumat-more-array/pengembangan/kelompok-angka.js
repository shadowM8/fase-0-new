function mengelompokkanAngka(arr) {
    // array hasil output = [[genap],[ganjil],[kelipatan-3]]
    var arrayHasil = []
    for (var i = 0; i < 3; i++) {
        arrayHasil.push(arr[i])
        // for (var j = 0; j < arr.length; j++) {  
        //     if (arr[j] % 3 === 0) {
        //         arrayHasil[i].push(arr[j])
        //     } 
        //     else if (arr[j] % 2 !== 0) {
        //         arrayHasil[i].push(arr[j])
        //     } 
        //     else if (arr[j] % 2 === 0) {
        //         arrayHasil[i].push(arr[j])
        //     }
        // }

    }
    return arrayHasil

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]