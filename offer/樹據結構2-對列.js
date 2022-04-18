//對列- 先進先出
class Queue{
  constructor() {
    this.count = 0 //控制對列大小
    this.lowestCount = 0 //追蹤第一個元素
    this.items = {}
  }
  enqueue(element) { //加入對列
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() { //刪除對列
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
    // return this.size() === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}