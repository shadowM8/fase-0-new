/**
 * 
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}

 */

 /**
  * 
  * Algoritma highestScore mencari nilai tertinggi yang spesifik dari parameter array of object
  * 1. deklarasikan variabel hasil sebagai objek yang belum memiliki property, karena propertynya dinamis
  * 2. lakukan looping dari indeks i sama dengan 0 sampai limit loopingnya adalah panjang array student
  *     2a. deklarasikan variabel kelas dengan students indeks i yang memiliki keys class (students[i].class)
  *     2b. Jika keys kelas dari objek hasil sama dengan undefined maka 
  *         2ba. deklarasikan objek hasil keys kelas sebagai objek dengan property
  *             2baa. deklarasikan keys name dengan nilainya students[i].name
  *             2bab. deklarasikan keys score dengan nilainya students[i].score
  *     2c. Selain itu jika students[i].score lebih besar dari objek hasil keys kelas keys score maka
  *             2ca. keys score sama dengan students[i].score
  *             2cb. keys name sama dengan students[i].name
  * 3. return hasil
  */

function highestScore(students) {
    var hasil = {}
    for (var i = 0; i < students.length; i++) {
        var kelas = students[i].class
        if (hasil[kelas] === undefined ) { //hasil[kelas] undefined karena kelas itu sendiri masih kosong
            hasil[kelas] = {
                name: students[i].name,
                score: students[i].score
            }
        }
        else if (students[i].score > hasil[kelas]['score']) {
            hasil[kelas]['score'] = students[i].score
            hasil[kelas]['name'] = students[i].name
        }

    }
    return hasil
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}