/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


function uniqueDuplicateFinder(sentence) {
  //versi Saya
  // var word = ''
  // var arraySentence = []
  // for (var i = 0; i < sentence.length; i++) {
  //   if (sentence[i] !== ' ') {
  //     word += sentence[i].toLowerCase()
  //     if (i === sentence.length - 1) {
  //       arraySentence.push(word)
  //       word = ''
  //     }
  //   }
  //   else if (sentence[i] === ' ') {
  //     if (word) {
  //       arraySentence.push(word)
  //       word = ''
  //     }
  //   }
  // }
  // // return arraySentence
  // // console.log(arraySentence)

  // var hasil = {}
  // hasil['unique'] = []
  // hasil['duplicate'] = []
  // var kamus = []
  // var hasilSementara = []
  // var obj = {}
  // for (var i = 0; i < arraySentence.length; i++) {
  //   var isUnique = true
  //   for (var j = 0; j < arraySentence.length; j++) {
  //     if (arraySentence[j] === arraySentence[i] && i !== j) {
  //       isUnique = false
  //     }
  //   }
  //   if (isUnique === true) {

  //     hasil['unique'].push(arraySentence[i])
  //   }
  //   else if (isUnique === false) {
  //     hasilSementara.push(arraySentence[i])
      
  //     for (var j = 0; j < hasilSementara.length; j++) {
  //       obj[hasilSementara[j]] = 1
  //     }
      
  //   }
    
  // }
  // hasil['duplicate'].push(Object.keys(obj))
  // return hasil

  //versi Herman
  var arraySentence = sentence.split(' ')
  var objHasil = {}
  objHasil['unique'] = []
  objHasil['duplicate']=[]
  var objSentence = {}
  for (var i = 0; i < arraySentence.length; i++) {
    if(!objSentence[arraySentence[i].toLowerCase()]) {
      objSentence[arraySentence[i].toLowerCase()] = 0
    }
    objSentence[arraySentence[i].toLowerCase()]++
  }
  // return objSentence
  for(var isi in objSentence) {
    if(objSentence[isi]===1) {
      objHasil['unique'].push(isi)
    }
    else {
      objHasil['duplicate'].push(isi)
    }
  }
  return objHasil
}

console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }

console.log(uniqueDuplicateFinder('john is coding')); // ['john', 'is', 'coding', 'and', 'he']
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueDuplicateFinder(''));
// {
//   unique: [],
//   duplicate: []
// }
