var student = {
    nama : 'Anton',
    class : 'zen-fox'
}
student['skor'] = 90
student['skor'] -= 10
student['skor'] = [] // mere-assign keys skor dari string menjadi array
student['skor'].push(90)
student['skor'].push(70)
console.log(student)
//dengan input objek student , keluarkan output 
/*
student name is Anton
student class is zen-fox
student skor is 90 ,70
 */

 // langkah pertama, karena pengulangan sesuai dengan keysnya maka, susun array dari keys
 var propertiStudent = Object.keys(student)
 console.log(propertiStudent)
 for (var i = 0; i < propertiStudent.length; i++) {
     if (Array.isArray(student[propertiStudent[i]])=== true) {
         console.log('student '+propertiStudent[i]+' is '+student[propertiStudent[i]].join(', ') )
     } else {
         console.log('student '+propertiStudent[i]+' is '+student[propertiStudent[i]])
     }
 }