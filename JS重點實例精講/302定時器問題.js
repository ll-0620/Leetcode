
var arr = ['101', '202', '303'];

// console.log('1:')
// for (var i = 0; i < arr.length; i++){
//   setTimeout(function () {
//     console.log(arr[i]) //arr[3] --> undifined
//   },i*1000)
// }

console.log('2:')
for (var i = 0; i < arr.length; i++){
  (function (time) {
    setTimeout(function () {
      console.log(arr[time]);
    }, time * 1000)
  })(i)
}