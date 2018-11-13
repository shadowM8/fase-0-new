function medaliAsianGames(data) {
    var hasil = {}
    
    for (var i = 0; i <data.length; i++) {        
        var negara = data[i][0]
        if (hasil[negara] === undefined) {
            hasil[negara] = {}
            hasil[negara]['negara'] = negara
            hasil[negara]['emas'] = 0
            hasil[negara]['perak'] = 0
            hasil[negara]['perunggu'] = 0
        }
            hasil[negara][data[i][1]] += 1;
               
    }
    var values = Object.values(hasil)
    var result = ''
    for (var i = 0; i<values.length; i++) {
        // console.log(values[i])
        // result = result , values[i] +'\n'
    }
    return values.join(',')
}
console.log(medaliAsianGames([
    ['Indonesia', 'emas'],
    ['India', 'perak'],
    ['Korea Selatan', 'emas'],
    ['India', 'perak'],
    ['India', 'emas'],
    ['Indonesia', 'perak'],
    ['Indonesia', 'emas'],
]));
/* 
{ Indonesia: { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 0 },
  India: { negara: 'India', emas: 1, perak: 2, perunggu: 0 },  'Korea Selatan': { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu: 0 } }
*/

[
    { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 0 },
    { negara: 'India', emas: 1, perak: 2, perunggu: 0 },
    { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu: 0 }
]