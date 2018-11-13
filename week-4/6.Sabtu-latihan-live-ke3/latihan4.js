var obj = {
    nama : 'Hacktiv8',
    fox : 'zen fox',
    tahun : 2018,
    batch : 26,
    phase1 : '26 November 2018'
}

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i) === true) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    //   console.log(i)
      console.log(obj)
    }
    return result;
    return ''
  }

console.log(showProps(obj));