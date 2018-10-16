function bikinDeret(number, bentuk) {
    var column = ''
    if (bentuk === 'kotak') {
        for (var i = 0; i < number; i++) {
            for (var j = 0; j < number; j++) {
                column += '*'
            }
            if (i !== (number - 1)) {
                column += '\n'
            }
        }
    } else if (bentuk === 'baris') {
        for (var i = 0; i < number; i++) {
            for (var j = (number - i - 1); j < number; j++) {
                column += '*'
            }
            if (i !== (number - 1)) {
                column += '\n'
            }
        }
    }

    return column
}

//test case
console.log(bikinDeret(5, 'baris'))
console.log(bikinDeret(4, 'kotak'))