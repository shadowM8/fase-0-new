//input 
var studentsMorning = ['Aji', 'Bono', 'Charlie', 'Deri']
var studentsEvening = ['Aji', 'Bebi', 'Charlie', 'Dono']

//output --> ['Aji','Bono','Bebi','Charlie','Deri','Dono']

//cara pertama pakai loop
// var studentsTotal = []
//gabung pakai concat
// studentsTotal = studentsMorning.concat(studentsEvening)
// console.log('pakai concat = ', studentsTotal)

//gabung tidak pakai concat
for (var i = 0; i<studentsEvening.length; i++) {
    studentsMorning.push(studentsEvening[i])
}
console.log('pakai manual = ', studentsMorning)
var hasil = []
for (var i = 0; i< studentsMorning.length; i++){
    var counter = 1
    for(var j = 0; j<hasil.length; j++) {
        if(studentsMorning[i]===hasil[j]) {
            counter++
        }
    }
    if (counter === 1) {
        hasil.push(studentsMorning[i])
    }
}
console.log('pakai manual = ',hasil)

//pakai Object.keys
var allUniqueStudents = new Object()
for (var i = 0; i < studentsMorning.length; i++){
    allUniqueStudents[studentsMorning[i]] = 'absen ke -'+i
}
console.log(allUniqueStudents)
console.log('pakai object keys = ', Object.keys(allUniqueStudents))


