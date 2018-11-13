var input =[
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'n', ' ', ' ', ' '],
    [' ', ' ', ' ', 'n', ' ', 'n', ' ', 'n', ' '],
    [' ', 'n', ' ', 'n', ' ', 'n', ' ', 'n', ' ']
   ] // 5

console.log(nJump(input, 2)) // 5

function nJump(array, jump) {
    var posisiN = []
    var indexN = 0
    for (var i = array.length-1 ; i >= 0; i--){
        // var isCharN = false
        // var frekuensiN = 0    
        
        for (var j = 0; j <array[i].length; j++){
            

            if (array[i][j] === 'n'){
                // isCharN = true
                // frekuensiN += 1
                indexN = j
                posisiN.push(indexN)
            }
        }
        // if (isCharN === true){
        //     posisiN.push(indexN)
        // }
    }
    return cariModus(posisiN)
}

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