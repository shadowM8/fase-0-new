# Array
adalah kumpulan dari berbagai data. Array memiliki indeks yang dimulai dari 0 seperti string.
Kita bisa melakukan insert(memasukkan), update (edit), bahkan delete (meniadakan) nilai dalam array.

[built in function dari array](https://github.com/hacktiv8/phase-0-activities/blob/master/modules/js-array.md#array-built-in-functions)

var month = ['21','05','1989']
console.log(month.sort(function (num1, num2) { return num2 - num1 })) // [ '1989', '21', '05' ]
console.log(month.sort(function (num1, num2) { return num1 - num2 })) // [ '05', '21', '1989' ]
console.log(month.sort(function (num1, num2) { return num1 > num2 })) // [ '05', '1989', '21' ]
console.log(month.sort(function (num1, num2) { return num1 < num2 })) // [ '21', '1989', '05' ]