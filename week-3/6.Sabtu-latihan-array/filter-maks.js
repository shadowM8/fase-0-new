
function filterMaks(array) {
    //pertama sort array
    for (var i = 1; i < array.length; i++){
        
        for (var j = 0; j<array.length; j++){
            var bandingan = array[j]
            if (array[j-1] > array[j]) {
                array[j] = array[j-1]
                array[j-1] = bandingan
            }
        }
    }
    // return array
    var hasil = ''
    var awal = ''
    var counter = 0
    var maks = 0
    for (var i = 0; i <array.length; i++){
        
        if (awal !== array[i]) {
            //jika awal tidak sama dengan array i berarti tidak sama, maka counter reset
            awal = array[i]
            counter = 0
            counter++
        } else {
            counter++            
        }
        
        if (counter > maks){
            // mencari maks terbesar
            maks = counter
            hasil = array[i]
        } else if(counter === maks) {
            hasil = -1
        }
    }
    return hasil
}

//tescase
console.log(filterMaks(['ayam', 'kucing', 'anjing', 'ayam','anjing'])); // error karena ada 2 yang maks
console.log(filterMaks(['ayam', 'kucing', 'anjing', 'ayam','anjing','ayam'])); //ayam!
