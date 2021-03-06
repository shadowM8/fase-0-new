function groupAnimals(animals) {
    var answer = [];
    var kamusHewan = '';
    for (var i = 0; i < animals.length; i++) {
        // console.log(kamusHewan)
        // console.log(answer)
        var currentAnimal = animals[i];
        var hurufPertama = currentAnimal[0];

        var indexSementara = -1;
        for (var j = 0; j < kamusHewan.length; j++) {
            if(kamusHewan[j] === hurufPertama) {
                indexSementara = j;
                break;
            }
        }
        // var indexSementara = kamusHewan.indexOf(hurufPertama)
        if (indexSementara === -1) {
            kamusHewan += hurufPertama;
            // var kandangBaru = []
            // kandangBaru.push(currentAnimal)
            // answer.push(kandangBaru);
            answer.push([currentAnimal])
        } else {
            answer[indexSementara].push(currentAnimal)
        }
    }
    return bubbleSort(answer)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

/**
 * algoritma
 * 1. Buat variabel hasil = array kosong [] untuk menampung hasil, buat variabel kamusHewan = '' untuk acuan
 * 2. Lakukan looping sepanjang array animals, yang isinya
 *  2a. Tentukan variabel currentAnimal = animals[i],
 *  2b. Tentukan variabel hurufPertama = currentAnimal[0], tentukan variabel indeksSementara = -1
 *  2c. Lakukan looping dengan limit panjang kamusHewan, yang isinya
 *      2ca. Jika kamusHewan[j] sama dengan (===) hurufPertama maka lakukan
 *          2caa. indeksSementara = j
 *          2cab. break , yang berarti jika syarat 2ca true maka berhenti lakukan looping 2c
 *  2d. Jika indeksSementara === -1 maka lakukan :
 *      2da. kamusHewan += hurufPertama
 *      2db. hasil.push([currentAnimal]) / 
 *  2e. selain itu (else) lakukan :
 *      2ea. hasil[indeksSementara].push(currentAnimal)
 * 3. return hasil
 */
function bubbleSort(array) {
    var done = false;
    while (!done) { //  done === false
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
        // console.log(done)
      }
    }  
    return array;
  }
  
//   var numbers = [12, 10, 15, 11, 14, 13, 16];
// //   bubbleSort(numbers);
// //   console.log(numbers);
// console.log(bubbleSort(numbers))