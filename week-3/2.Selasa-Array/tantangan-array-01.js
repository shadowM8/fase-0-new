//input "hello world!"
//output
//"!dlrow olleh"
function balikKata(string){
    //pakai for loop
    var hasil = ''
    for (var i= 0; i < string.length; i++){
        hasil += string[string.length-1-i]
    }
    return hasil
    //pakai reverse
    // return string.split('').reverse().join('')
}
console.log(balikKata('hello world!'))