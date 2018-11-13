function meleeRangedGrouping(str) {
    var arrayStr = str.split(',')
    var result = [[], []]

    for (var i = 0; i < arrayStr.length; i++) {
        var isRangedHeroes = false
        for (var j = 0; j < arrayStr[i].length; j++) {
            if (arrayStr[i][j] === '-' && arrayStr[i][j + 1] === 'R') {
                isRangedHeroes = true
            }
            // console.log(isRangedHeroes)
        }
        // console.log(isRangedHeroes)
        if (isRangedHeroes === true) {
            var heroesName = arrayStr[i].split('-')
            result[0].push(heroesName[0])

        }
        else {
            var heroesName = arrayStr[i].split('-')
            result[1].push(heroesName[0])
        }
    }
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []