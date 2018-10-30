function bikinPohon(num) {
    var string = ''
    for (var i = 0; i < num; i++) {
        for (var j = 0; j <= i; j++) {
            string = string + '*'
        }
        if (i === num - 1) {
            string = string
        } else if (i < num) {
            string = string + '\n'
        }
    }
    return string
}

console.log(bikinPohon(5))