function pasanganTerbesar(num) {
    var hasil = ''
    var hasil2 = ''
    // scan/cek tiap angka dalam num
    // untuk pengecekan ubah tipe data num ke string
    var numString = String(num)
    for (var i = 0; i < numString.length; i++){
        //pertama cari angka depan terbesar
        if (numString[i]>hasil) {
            hasil = numString[i]
            hasil2 = numString[i+1] // cari pasangannya 
        }        
    }
    return Number(hasil+hasil2) // kembalikan 
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99