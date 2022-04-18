// 基於數據的棧 - 數組版本
class Stack{
  constructor() {
    this.items = []; //{1}
  }
  push(element){
    this.items.push(element)
  }
  pop(){
    this.items.pop();
  }
  peek(){
    return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length === 0;
  }
  size(){
    return this.items.length;
  }
  clear(){
    this.items = [];
  }
}

// const s1 = new Stack()
// console.log(s1.isEmpty());
// s1.push(5)
// s1.push(7)
// s1.pop()
// s1.push(9)
// console.log(s1.peek());
// console.log(s1.size());

// 基於數據的棧 - 對象版本
class Stack2{
  constructor() {
    this.count = 0; // 使用count屬性來記錄棧的大小
    this.items = {}; //{1}
  }
  push(element){
    this.items[this.count] = element;
    this.count++;
  }
  pop(){
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count-1];
  }
  isEmpty(){
    return this.count === 0;
  }
  size(){
    return this.count;
  }
  clear(){
    this.items = {};
    this.count = 0;
    /*
    while(!this.isEmpty()){
      this.pop();
    }
     */
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objStr = `${this.items[0]}`;
    for (leti = 1; i < this.count; i++){
      objStr = `${objStr},${this.items[i]}`
    }
    return objStr;
  }
}

// const s2 = new Stack2()
// console.log(Object.getOwnPropertyNames(s2)); // [ 'count', 'items' ]
// console.log(Object.keys(s2)); // [ 'count', 'items' ] 表示這兩個屬性是公開的
// console.log(s2.items);

// 從十進制到二進制
function decimalToBinary(decNumber) {
  const remStack = new Stack2();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number/2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString
}

console.log(decimalToBinary(10));

//進制轉換算法
function baseConverter(decNumber, base) {
  const remStack = new Stack2;
  const digits = '0123456789ABCDEFGHIFKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(10,12));