filterByHacker([
    ['Harry potter - jkrowling', 'Intro to Javascript - program buddy', 'hack to server - hacker'],
    ['Fedora deep secure - secure one', 'Wireshack to Sniff - hacker', 'book of live - live savier'],
    ['Intro to gamming - GamingNation', 'Man in middle attack - hacker']
]);
/**
[ 
  ['Harry potter - jkrowling', 'Intro to Javascript - program buddy'],
  ['Fedora deep secure - secure one', 'book of live - live savier'],
  ['Intro to gamming - GamingNation']
]
 */

 /**
  * 
  * algoritma :
  * 1. untuk menfilter kata hacker dari array 2 dimensi, perlu dilakukan 3 kali loop, pertama deklarasikan variabel hasil dengan nilainya array kosong
  * 2. loop yang pertama yaitu loop [i] yaitu untuk menscan array paling luar 
  *     2a. loop yang kedua yaitu loop [j] untuk menscan masing2 nilai pada array[i]
  *     2ab. deklarasikan variabel mengandungHack = false, karena kita asumsi tidak ada kata yang difilter
  *         2aa. loop yang kedua yaitu loop [k] untuk mengecek nilai pada array[i] apakah terdapat kata yang difilter atau tidak
  *             2aaa. jika mengandung kata Hack maka variabel mengandungHack = true
  *     2ac Jika mengandungHack sama dengan false, maka lakukan
  *         2aca. push nilai array[i] yang ke j yang berarti array[i][j] ke dalam array hasil
  * 3. kembalikan/cetak array hasil
  */        

function filterByHacker(array) {
    var result = []
    for (var h = 0; h < array.length; h++) {
        for (var i = 0; i < array[h].length; i++) {
            var mengandungHack = false
            for (var j = 0; j < array[h][i].length; j++) {
                if (array[h][i][j] === 'h' && array[h][i][j + 1] === 'a' && array[h][i][j + 2] === 'c' && array[h][i][j + 3] === 'k') {
                    mengandungHack = true
                }
            }

            if (!mengandungHack) {
                result.push(array[h][i])
            }
        }
    }
    // console.log(array[1][1][1])
    console.log(result)
}