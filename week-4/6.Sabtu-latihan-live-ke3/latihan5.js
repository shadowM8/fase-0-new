var person = {
    nama : 'Theresia',
    age : '25',
    gender : 'female',
    hobby : ['belajar','baca','tidur']
}
var kelas = []
kelas.push(person)
var person = {
    nama : 'Maman',
    age : '27',
    gender : 'male'    
}
kelas.push(person)
// console.log(kelas)
for (var i = 0; i < kelas.length; i++) {
    console.log('Nama: ', kelas[i].nama)
    console.log('Umur ', kelas[i].age)    
    console.log('JK: ', kelas[i].gender)
    
    if (kelas[i].hobby !== undefined){        
        kelas[i].hobby.push('maen bekel')
    }
    else {
        kelas[i].hobby = []
        kelas[i].hobby.push('maen komputer')
    }
    console.log('Hobby: ', kelas[i].hobby)
    
}