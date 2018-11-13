function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = []
    var hasil2 = new Object()
    var ongkos = 0
    
    
    for (var i = 0 ; i < arrPenumpang.length; i++){
        var penumpang = new Object()
        penumpang['penumpang']= arrPenumpang[i][0]
        penumpang['naikDari'] = arrPenumpang[i][1]
        penumpang['tujuan'] = arrPenumpang[i][2]
        ongkos = (rute.indexOf(penumpang['tujuan']) - rute.indexOf(penumpang['naikDari'])) * 2000
        
        penumpang['bayar'] = ongkos
        hasil.push(penumpang)
        // hasil2 = {penumpang}
    }
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]