/**
 * 
JavaScript merupakan bahasa pemrograman yang berbasis simple-object (Objek sederhana). Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).
Objek dalam JavaScript, sama seperti banyak bahasa pemrograman lainnya, bisa dibandingkan dengan objek dalam kehidupan nyata.
Untuk membuat sebuah object literal bisa dengan cara menuliskan kurung kurawal (curly braces) kemudian menuliskan nama property yang harus memiliki keyName dan value.
 */

var myObj = {
    myKey: 'myValue'
};

//Value dalam object literal selain string bisa juga dengan memasukkan value array bahkan value object literal lainnya

var supermanObj = {
    id: "1s23abc",
    name: 'Clark Kent',
    age: 200,
    favorites: ['reading', 'writing', { sports: ['parkour', 'swimming', 'karate'] }],
    address: { street: 'Orchard Street', zipCode: 12341 },
    fullName: function(){
        return this.name+' '+this.age;
    }
}

// console.log(supermanObj.id)
// console.log(supermanObj.name); // "Superman"
// console.log(supermanObj.age); // 200
// console.log(supermanObj.favorites[0]); // "reading"
// console.log(supermanObj.favorites[2].sports); // ["parkour", "swimming", "karate"]
// console.log(supermanObj.favorites[2].sports[0]); // "parkour"
// console.log(supermanObj.address); // {street: "Planet Krypton", zipCode: 54213}
// console.log(supermanObj.address.zipCode); //54213

// //A method is a function stored as a property.
// console.log(supermanObj.fullName())
//you want to create new object use 
// var myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;
// console.log(myCar)

// four variables are created and assigned in a single go, 
// separated by commas
// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';

// console.log(myObj);

var myCar = new Object();
myCar.factory = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;


var propertyName = 'make';
myCar[propertyName] = 'BMW';

propertyName = 'model';
myCar[propertyName] = 'S7';

console.log(myCar)

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
  }

console.log(showProps(myCar, 'mobil gw'))