function cariModus(arr) {
  var modus = 0
  var munculModus = 0
  for (var i = 0; i < arr.length; i++) {
    var counter = 1
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++
      }
    }
    if (counter > munculModus) {
      munculModus = counter
      modus = arr[i]
    }
  }
  if (munculModus < 2 || munculModus === arr.length) {
    return -1
  }
  return modus
}
/**
 * 
 */
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4

/*
modulus = 4
tampil = 2

10
  counter = 1
  4
  5
  2
  4
  couter = 1
4
  counter = 1
  5
  2
  4
    counter++
  counter = 2
5
  counter = 1
  2
  4
  counter = 1
2
  counter = 1
  4
  counter = 1
4
  counter = 1
*/


console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 5, 10, 10, 6, 10])); // 5