var namr = 'outer'
var obj = {
  name: 'inner',
  method: function () {
    var _this = this
    return function () {
      return _this.name;
    }
  }
}

console.log(obj.method()())