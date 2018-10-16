// output :
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

//gunakan while
var angka = 0;
console.log('LOOPING dengan WHILE');
console.log('LOOPING PERTAMA');
while (angka < 19) {
    console.log((angka + 2) + ' - I love coding');
    angka += 2
}
//di line ini angka == 20
console.log('LOOPING KEDUA');
while (angka > 0) {
    console.log((angka) + ' - I will become fullstack developer')
    angka += -2
}
console.log('==================')
//menggunakan for
console.log('LOOPING dengan FOR');
console.log('LOOPING PERTAMA');
var angka2 = 20
for (var i = 0; i < angka2; i++) {

    if (i % 2 === 0 || i === 0) {
        console.log((i + 2) + ' - I love coding');
    }
}
console.log('LOOPING KEDUA');
for (var i = angka2 + 2; i > 2; i--) {
    if (i % 2 === 0) {
        console.log((i - 2) + ' - I will become fullstack developer');
    }
}
// SOAL ke 3 PERULANGAN GANJIL GENAP
//3.1  pertambahan counter 1
console.log('====perulangan ganjil genap====')
for (var counter = 1; counter <= 100; counter++) {
    if (counter % 2 !== 0) {
        console.log('GANJIL');
    } else {
        console.log('GENAP')
    }
}
//3.2 pertambahan counter 2
console.log('penambahan counter = 2')
for (var counter = 1; counter <= 100; counter += 2) {
    if (counter % 3 === 0) {
        console.log(counter + ' kelipatan 3')
    }
}

//3.3 pertambahan counter 5
console.log('penambahan counter = 5')
for (var counter = 1; counter <= 100; counter += 5) {
    if (counter % 6 === 0) {
        console.log(counter + ' kelipatan 6')
    }
}

//3.4 pertambahan counter 9
console.log('penambahan counter = 9')
for (var counter = 1; counter <= 100; counter += 9) {
    if (counter % 10 === 0) {
        console.log(counter + ' kelipatan 10')
    }
}