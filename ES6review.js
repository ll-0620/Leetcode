// array 擴展
// 1.擴展運算符
console.log(...[1, 2, 3]);

const a1 = [1, 2];
const [...a2] = a1;
console.log(a2)

const a3 = ['c'];
console.log([...a1, ...a2, ...a3])
// 扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

