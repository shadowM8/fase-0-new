/**
 Dalam sebuah web user diwajibkan memiliki user dan roles
 terdapat beberapa role yang tesedia dimana setiap role dapat mengakses menu yang berbeda sebgai berikut
 1) Non-member
    - Home
    - Login
 2) Author
    - Home
    - Logout
    - Create Article
    - Edit Own Article
    - Delete Own Article
  3) Editor
    - Home
    - Logout
    - Edit Article

  Buatlah program yang menampilkan user dan menu yang di akses, dengan kriteria sebagi berikut
  - jika user atau role tidak diisi maka secara otomatis memiliki roles Non-meber
  - jika user dibawah 5 karakter tampilkan pesan "Login failed"
  - jika role tidak sesuai maka tampilkan pesan "Login failed"

  Contoh 1:
  -----------------
  var user = ''
  var role = ''

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Login'


  Contoh 2:
  -----------------
  var user = 'Hellios'
  var role = 'Editor'

  Output
  -----
  'Hellios dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Contoh 3:
  -----------------
  var user = 'Hello'
  var role = 'Editor'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'


  Contoh 4:
  -----------------
  var user = 'Hello'
  var role = 'Editors'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Wajib dilengkapi dengan alghoritma atau pseudocode
 */


/**
 * ALGORITMA
 * 1. TENTUKAN VARIABEL 'USER' DENGAN NILAI APAPUN
 * 2. TENTUKAN VARIABEL 'ROLE' DENGAN NILAI APAPUN
 * 3. JIKA 'USER' SAMA DENGAN KOSONG(UNDEFINED) ATAU 'ROLE' SAMA DENGAN KOSONG(UNDEFINED) ATAU 'ROLE' SAMA DENGAN NON-MEMBER
 *  MAKA LAKUKAN LANGKAH 4
 *      4. TAMPILKAN " 'USER' DAPAT MENGAKSES MENU HOME DAN LOGIN" 
 * 6. SELAIN ITU JIKA 'ROLE' SAMA DENGAN 'AUTHOR' MAKA LAKUKAN LANGKAH 7
 *      7. TAMPILKAN " 'USER' DAPAT MENGAKSES MENU HOME, LOGOUT, CREATE ARTICLE, EDIT OWN ARTICLE, DELETE OWN ARTICLE"
 * 8. SELAIN ITU JIKA 'ROLE' SAMA DENGAN 'EDITOR' MAKA LAKUKAN LANGKAH 9
    * 9. TAMPILKAN " 'USER' DAPAT MENGAKSES MENU HOME, LOGOUT, EDIT ARTICLE"
 * 10. SELAIN ITU JIKA 'USER' MEMILIKI PANJANG KARAKTER KURANG DARI 5 DAN LEBIH DARI 0 , MAKA LAKUKAN
 *    11. TAMPILKAN 'LOGIN INVALID
 * 
 */

var user = 'antoni';
var role = 'editor';

// console.log(user.length)


if (user === '' || role === ''||role === 'non-member'){
    console.log('Guest user dapat mengakses menu')
    console.log('- Home')
    console.log('- Login')
}
else if (role === 'author'){
    console.log(user +', anda dapat mengakses menu')
    console.log('- Home')
    console.log('- Logout')
    console.log('- Create Article')
    console.log('- Edit Own Article')
    console.log('- Delete Own Article')
}
else if (role === 'editor') {
    console.log(user +', anda dapat mengakses menu')
    console.log('- Home')
    console.log('- Logout')
    console.log('- Edit Article')
} else if(user.length > 0 && user.length < 5) {
    console.log('login failed')
}

