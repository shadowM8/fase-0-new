function mengelompokkanAngka(arr) {
    // array hasil output = [[genap],[ganjil],[kelipatan-3]]
    var arrayHasil = [1]
    var elemenArrayHasilGenap = []
    var elemenArrayHasilGanjil = []
    var elemenArrayHasilKelip3 = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0){
            elemenArrayHasilKelip3.push(arr[i])
        } else if (arr[i] % 2 !== 0) {
            elemenArrayHasilGanjil.push(arr[i])
        } else if (arr[i]% 2 === 0){
            elemenArrayHasilGenap.push(arr[i])
        }
    }
    arrayHasil.splice(0,1, elemenArrayHasilGenap, elemenArrayHasilGanjil, elemenArrayHasilKelip3)
    return arrayHasil
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]