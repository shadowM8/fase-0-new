function evenPairsSum(str) {
    // Code disini
    var strTemp = ''
    var jumlah = 0
    for (var i = 0; i < str.length; i += 2) {
        if (str[i + 1] === undefined) {
            strTemp = str[i] + str[0]
        } else {
            strTemp = str[i] + str[i + 1]
        }
        if (strTemp % 2 === 0) {
            jumlah = jumlah + Number(strTemp)
        }

    }
    return jumlah
}
console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23674266201')); // 140
console.log(evenPairsSum('2478201')); // 134