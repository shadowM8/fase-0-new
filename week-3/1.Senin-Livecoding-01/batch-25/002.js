//2

// pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
// buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

// contoh 1 (tanggal = 2):
// hari selasa

// contoh 1 (tanggal = 1):
// hari senin

// contoh (tanggal = 8):
// hari senin

// contoh (tanggal = 17):
// hari rabu
//kesamaan dari 1, 8, 15, 22, 29 itu 

var tanggal = 23

if (tanggal === 1 || (tanggal - 1) % 7 === 0) {
    console.log('hari senin')
}
else if (tanggal === 2 || (tanggal - 2) % 7 === 0) {
    console.log('hari selasa')
}
else if (tanggal === 3 || (tanggal - 3) % 7 === 0) {
    console.log('hari rabu')
}
else if (tanggal === 4 || (tanggal - 4) % 7 === 0) {
    console.log('hari kamis')
}
else if (tanggal === 5 || (tanggal - 5) % 7 === 0) {
    console.log('hari jumat')
}
else if (tanggal === 6 || (tanggal - 6) % 7 === 0) {
    console.log('hari sabtu')
}
else if (tanggal === 7 || (tanggal - 7) % 7 === 0) {
    console.log('hari minggu')
}


