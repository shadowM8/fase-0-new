function spellingBee(string) {
    // var alphabet = new Object()
    var alphabet = {}
    for (var i = 0; i < string.length; i++) {
        // alphabet['abjad'] = undefined
        // alphabet['abjad '+string[i]] = 'terletak pada indeks ke- '+i
    }
    // return Object.getOwnPropertyNames(alphabet) // keys juga
    // return Object.keys(alphabet) // mereturn keys dari objek alphabet dan berupa array
    // return Object.values(alphabet) // mereturn value dari objek alphabet dan berupa array
    return alphabet['abjad'] // mereturn objek alphabet
}

var y = 'antoz'
console.log(spellingBee(y))
console.log(spellingBee('anton'))