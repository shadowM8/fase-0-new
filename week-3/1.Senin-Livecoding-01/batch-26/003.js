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


 function genetareMemberID(name, birthdate, antrian){
     var inisial = name[0].toLowerCase()
     console.log(inisial+birthdate+antrian)
 }

 genetareMemberID("Budi", "09022000", 1)
 genetareMemberID("Alfian", "22091999", 121)
