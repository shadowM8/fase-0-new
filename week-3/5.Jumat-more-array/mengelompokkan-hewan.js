function groupAnimals(animals) {
    // deklarasikan variabel hasil dengan array kosong
    //deklarasi kamusHewan dengan string kosong
    var hasil = [];
    var kamusHewan = '';

    //lakukan loop [i] untuk mengecek nilai dari masing2 variabel pada animals
    //
    for (var i = 0; i <animals.length; i++){
        //deklarasi variabel hurufPertama untuk mengecek huruf pertama dari animals[i]
        // hurufPertama = animals[i][0]
        var currentAnimal = animals[i]
        var hurufPertama = currentAnimal[0]
        var indeksSementara = -1
        //lakukan loop [j] untuk membandingkan nilai dari loop [i] terhadap kamusHewan loop [j]
        for (var j = 0; j<kamusHewan.length; j++){
            //jika kamusHewan pada indeks ke j itu sama dengan hurufPertama, maka set indeksSementara = j
            if(kamusHewan[j]===hurufPertama) {
                indeksSementara = j
            }
        }
        //jika indeksSementara sama dengan -1 , berarti nilai pd animals[i] masih unik, karena 
        //huruf pertamanya tidak sama dengan kamus yang ke j lakukan 
        if (indeksSementara === -1) {
            // update kamusHewan dengan huruf pertama dari animals[i] yang unik ini
            // lalu push animals[i] ke variabel hasil
            kamusHewan += hurufPertama
            hasil.push([currentAnimal])
        } else {
            // jika indeksSementara sama dengan j, berarti variabel animals[i] memiliki awalan huruf yang sudah
            // disimpan oleh kamusHewan, sehingga dilakukan
            hasil[indeksSementara].push(currentAnimal)
        }

    }
    return hasil.sort(function(a,b){return a > b})
    
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