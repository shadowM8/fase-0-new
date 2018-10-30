function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
  ];
  var hasil = []

  if(shoppers.length === 0){
    return ''
  } else {
    for (var i = 0; i < listBarang.length; i++) {
      var infoMember = new Object()
      infoMember['product'] = listBarang[i][0]
      infoMember['shopper'] = []
  
      var totalAmount = listBarang[i][2]
      for (var j = 0; j < shoppers.length; j++) {
        if (shoppers[j].product === listBarang[i][0]) {
          totalAmount -= shoppers[j].amount
          if (totalAmount >= 0) {
            infoMember['shopper'].push(shoppers[j].name)          
          } else {
            totalAmount += shoppers[j].amount
          }
        }
      }
      infoMember['leftOver'] = totalAmount
      infoMember['total Profit'] = (listBarang[i][2] - totalAmount) * listBarang[i][1]
      // console.log(shoppers[i].name)
      hasil.push(infoMember)
    }
    // console.log(shoppers.length)
  }

  

  return hasil
}

// TEST CASES
// console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
// console.log('zzzzz')
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]