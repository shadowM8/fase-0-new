function filterUnik(array) {
    var hasil = []
    for (var i = 0; i < array.length; i++){
        var isUnik = true
        for (var j = 0; j<hasil.length; j++){
            if (array[i]===array[j] ){
                isUnik = false
            }
        }
        if(isUnik === true){
            // hasil.push(array[i])
            hasil[hasil.length] = array[i]
        } 
    }
    return hasil
}

//testcase

console.log(filterUnik(['ayam', 'kucing', 'anjing', 'ayam','anjing'])); // ['ayam','kucing','anjing']

                                                        