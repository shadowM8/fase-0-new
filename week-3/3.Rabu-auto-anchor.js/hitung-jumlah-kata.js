function hitungJumlahKata(kalimat) {    
    var jumlahSpasi = 0
    for (var i = 0; i < kalimat.length; i++) {
        //hitung jumlah spasi
        if (kalimat[i]===' '){
            jumlahSpasi++
        }
    }
    var jumlahKata =  jumlahSpasi+1
    return jumlahKata
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5