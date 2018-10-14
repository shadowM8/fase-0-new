# 1. Newton Second Law
### buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2!
### ΣF = m x a
### ΣF = resultan gaya (Newton)
### m = massa benda (kg)
### a = percepatan benda (m/s2)

Algoritma :
1. Simpan nilai massa benda sebagai m dengan nilai 600
1. Simpan nilai percepatan sebagai a dengan nilai 2
1. Simpan nilai resultan gaya sebagai F dengan nilai 0
1. Lakukan penghitungan  m * a
1. Simpan hasil penghitungan langkah 4 ke dalam variabel F
1. tampilkan nilai dari F

Pseudocode :
1. STORE "m" with value 600
1. STORE "a" with value 2
1. STORE "F" with any value
1. CALCULATE "m" * "a"
1. SET the result of step 4 as "F"
1. DISPLAY "F"

# 2. Tahun Kabisat
### Kriteria tahun kabisat yaitu :
* Jika tahun habis di bagi 4 dan tidak habis di bagi 100, dan
* Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400
jika salah satu syarat sudah dipenuhi tidak perlu cek syarat bawahnya..
### Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!

Algoritma :
1.Simpan nilai "tahun" dengan nilai apapun
2.Jika "tahun" modulus 4 sama dengan 0 DAN "tahun" modulus 100 tidak sama dengan 0 lakukan 2.1, jika tidak lakukan 3
    2.1. tampilkan "Tahun Kabisat!" sebagai nilai dari "hasil"
3.Jika "tahun" modulus 4 sama dengan 0 DAN "tahun" modulus 100 sama dengan 0 DAN "tahun" modulus 400 sama dengan 0 lakukan 3.1 , jika tidak lakukan 4
    3.1. tampilkan "Tahun Kabisat!" sebagai nilai dari "hasil"
4.Tampilkan "bukan Tahun Kabisat!" sebagai nilai dari "hasil"

pseudocode :
1.STORE "tahun" with any value
2.IF "tahun" modulus 4 == 0 AND "tahun" modulus 100 != 0 , DO 2.1, ELSE DO 3
    2.1. display "Tahun Kabisat!"
3.ELSE IF "tahun" modulus 4 == 0 AND "tahun" modulus 100 == 0 AND "tahun" modulus 400 == 0, DO 3.1, ELSE DO 4
    3.1. display "Tahun Kabisat!"
4.ELSE DO display "bukan Tahun Kabisat!"

# 3. Laundry Day
### Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci.
### Bantulah Foxie untuk menghitung jumlah pakaian yang akan dimasukkan ke mesin cuci menggunakan algoritma & pseudocode perulangan!

Algoritma :
1.Simpan nilai "pakaianDicuci" dengan nilai 0
2.Selama "pakaianDicuci" nilainya lebih kecil dari 20, lakukan langkah 2.1. Jika "pakaianDicuci" sama dengan 20, lakukan 3
    2.1. tambah nilai "pakaianDicuci" dengan 1 
3.Nyalakan mesin cuci.

Pseudocode :
1.STORE "pakaianDicuci" with value 0
2.WHILE "pakaianDicuci" value less than 20, DO step 2.1. if "pakaianDicuci" value equals 20 do step 3
    2.1. add 1 to "pakaianDicuci" value
3.Turn on Laundry Machine

# 4. Periksa Kuku
### Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut
### Buatlah algoritma & pseudocode untuk permasalahan diatas.

Algoritma :
1 . Simpan nilai "siswaYangDiperiksa" dengan nilai 0
2 . Simpan nilai "panjangKukuSiswa" dengan nilai string 
3 . Selama nilai "siswaYangDiperiksa" lebih kecil dari 40, lakukan langkah 3.1. Jika "siswaYangDiperiksa" sama dengan 40 lakukan 4
    3 . 1. Jika "panjangKukuSiswa" sama dengan "panjang" lakukan 3.1.1, jika tidak lakukan3.2
        3.1.1. display "hukum siswa !"
    3 . 2. Jika "panjangKukuSiswa" sama dengan "pendek" lakukan 3.2.1,
        3.2.1. display "puji siswa !"
3 . Algoritma selesai.

Pseudocode :
1 . STORE "siswaYangDiperiksa" with value 0
2 . STORE "panjangKukuSiswa" with string value
3 . WHILE "siswaYangDiperiksa" value less than 40, DO 3.1, IF "siswaYangDiperiksa" value equal to 40, DO 4
    3.1. IF "panjangKukuSiswa" value is "panjang" do 3.1.1, else do 3.2.
        3.1.1. DISPLAY "Hukum Siswa!"
    3.2. IF "panjangKukuSiswa" value is "pendek" do 3.2.1
        3.2.1. DISPLAY "Puji siswa!"
4 . END
