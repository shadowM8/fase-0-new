//1. menyusun barisan bintang
// skeleton Code
// var rows1; // input the number of rows

// // do loops to display asterisks in the console.
// Output
// jika rows1 = 5

// *
// *
// *
// *
// *
var rows1 = 5
for (var i = 0; i < rows1; i++) {
    console.log('*')
}
//2 barisan bintang nested looping
var rows2 = 5
var column = ''
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j<rows2; j++){
        column += '*'
    }
    if (i !== (rows2-1)){
        column += '\n'
    }    
}
console.log(column)
//3 barisan tangga bintang nested looping
var rows3 = 5
var column2 = ''
for (var i = 0; i < rows3; i++){
    for (var j = (rows3-i-1); j < rows3; j++){
        column2 += '*'
    }
    if (i !== (rows3-1)){
        column2 += '\n'
    }  
}
console.log(column2)