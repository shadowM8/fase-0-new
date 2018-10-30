/**
 Membership ID

 Active8 gym memiliki sistem membership untuk setiap pelanggan di haruskan mengisi nama, tanggal lahir, dan diberikan nomor antrian
 dari ketiga data tersebut maka akan dibuatkan ID Member dengan format sebagai berikut

 Huruf Pertama Pelanggan + Dua Digit Tanggal Lahir  + Dua Digit Bulan Lahir + Dua Digit akhir tahun lahir + tiga digit nomor antrian

 Buatlah sebuah function yang menghasilkan id member tersebut



 Contoh 1:
 -----------------------------
 genetareMemberID("Alfian", "22091999", 121)
 output
 ---
 a220999121
 
 Contoh 2:
 -----------------------------
 genetareMemberID("budi", "09022000", 1)
 output
 ---
 b090200001

 */

 function genetareMemberID(name, date, antrian){
     digitPertama = name[0].toLowerCase()
     digitKedua = date.slice(0, 4)+date.slice(6)
     if (antrian < 10){
         digitKetiga = '00'+antrian
     } else if (antrian < 100){
         digitKetiga = '0'+antrian
     } else {
         digitKetiga = antrian
     }

     console.log(digitPertama+digitKedua+digitKetiga)
 }

 genetareMemberID("budi", "09022000", 1)
 genetareMemberID("Alfian", "22091999", 121)