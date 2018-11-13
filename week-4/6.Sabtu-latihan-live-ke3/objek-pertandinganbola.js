function pertandingan(array) {
    var hasil = []
    var objMatch = {}

    for (var i = 0; i < array.length; i++){
        var pertandingan = array[i].match
        objMatch[pertandingan] = {}
        objMatch[pertandingan]['match'] = pertandingan
        objMatch[pertandingan]['area'] = {}
    }

    for (var i = 0; i < array.length; i++) {
        var pertandingan = array[i].match
        var tempat = array[i].area        
        objMatch[pertandingan]['area'][tempat]=''
        
    }

    for (var i = 0; i < array.length; i++) {
        var pertandingan = array[i].match
        var tempat = array[i].area
        var nama = array[i].nama
        objMatch[pertandingan]['area'][tempat] += nama +' |'
    }
    
    
    return Object.values(objMatch)
}

var input = [{
    nama: 'Alfa',
    match: 'indonesia vs philipin',
    area: 'tribun barat'
},
{
    nama: 'Beta',
    match: 'indonesia vs malaysia',
    area: 'tribun barat'
},
{
    nama: 'Charlie',
    match: 'indonesia vs malaysia',
    area: 'tribun timur'
},
{
    nama: 'Delta',
    match: 'indonesia vs philipin',
    area: 'tribun timur'
},
{
    nama: 'Enigma',
    match: 'indonesia vs philipin',
    area: 'tribun barat'
},
]
console.log(pertandingan(input))

/** output
  [
    { 
        match: 'indonesia vs philipin',
        area: {
          'tribun barat': 'Alfa | Enigma |',
          'tribun timur': 'Delta |'
        }
    },
    { 
        match: 'indonesia vs malaysia',
        area: {
          'tribun barat': 'Beta |',
          'tribun timur': 'Charlie |'
        }
    }
  ]
 */

// console.log(pertandingan(input));




liga = {
    'indonesia vs philipin':
        [
            {
                nama: 'Alfa',
                area: 'tribun barat'
            },
            {
                nama: 'Delta',
                area: 'tribun timur'
            },
            {
                nama: 'Enigma',
                area: 'tribun barat'
            }
        ],
    'indonesia vs malaysia':
        [
            {
                nama: 'Beta',
                area: 'tribun barat'
            },
            {
                nama: 'Charlie',
                area: 'tribun timur'
            }
        ]
}