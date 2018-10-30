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

var user = 'antoni';
var role = '';

// console.log(user.length)

if (user.length > 5 || role.length > 5) {
    if (role === 'editor'){
        console.log(user +', anda dapat mengakses menu')
        console.log('- Home')
        console.log('- Logout')
        console.log('- Edit Article') 
    } else if (role === 'author'){
        console.log(user +', anda dapat mengakses menu')
        console.log('- Home')
        console.log('- Logout')
        console.log('- Create Article')
        console.log('- Edit Own Article')
        console.log('- Delete Own Article')
    } else if (role === 'non-member' || role === ''){
        console.log('Guest user dapat mengakses menu')
        console.log('- Home')
        console.log('- Login')
    } else {
        console.log('role salah, login invalid')
    }
} else {
    console.log('nama user salah, login invalid')
}