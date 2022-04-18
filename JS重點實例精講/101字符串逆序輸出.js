// 1. 字符串逆序輸出
var arr = "this is an apple.";

// revrese()
console.log('revrese()',arr.split('').reverse().join(''));

// charAt()
function ex2(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--){
    result += str.charAt(i);
  }
  return result;
}
console.log('charAt()',ex2(arr))

// 遞歸
function ex3(strIn, pos, strOut) {
  if (pos < 0) {
    return strOut;
  }
  strOut += strIn.charAt(pos--);
  return ex3(strIn, pos, strOut);
}
console.log('遞歸',ex3(arr, arr.length - 1, ''))

// call()
function ex4(str) {
  var a = Array.prototype.slice.call(str)
  return a.reverse().join('')
}

console.log('call()', ex4(arr))

// 棧
function Stack(){
  this.data = []
  this.top = 0
}

Stack.prototype = {
  push: function push(element) {
    this.data[this.top++] = element
  },
  pop: function pop() {
    return this.data[--this.top];
  },
  length: function () {
    return this.top;
  }
}

function reverseString(str) {
  var s = new Stack();
  var a = str.split('');
  var len = str.length;
  var result = '';
  for (let i = 0; i < len; i++){
    s.push(a[i])
  }
  for (let i = 0; i < len; i++){
    result += s.pop();
  }
  return result;
}

console.log('stack',reverseString(arr))