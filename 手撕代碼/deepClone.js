/**
 * deepClone（深拷贝）
说明：通过new WeakMap()来避免循环引用（拷贝引用类型时并保存其地址，后面遇到引用类型先检查是否已经保存了）
通过Reflect.ownKeys(obj)遍历出obj自身的所有可枚举和不可枚举的属性以及symbol属性
拷贝对应属性的属性描述符
 */

function checkType(obj){
  const type = Object.prototype.toString.call(obj)
  return type.slice(8,-1)
}

// deepClone
export function deepClone(obj, hash = new WeakMap()) {
  if (checkType(obj) === 'RegExp') {
    // regExp.source 正则对象的源模式文本;
    // regExp.flags 正则表达式对象的标志字符串;
    // regExp.lastIndex 下次匹配开始的字符串索引位置
    let temp =  new RegExp(obj.source, obj.flags);
    temp.lastIndex = obj.lastIndex;
    return temp;
  }
  if (checkType(obj) === 'Date') {
    return new Date(obj)
  }
  // 非复杂类型(null、undefined、string、number、symbol、boolean、function)
  if(obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 與hash.set()防止循環利用
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let newObj = new obj.constructor()
  hash.set(obj, newObj)

  // Object.keys(obj)类型于 for in 和 obj.hasOwnProperty
  // 是否应该拷贝自身属性（可枚举的和不可枚举的以及symbol）
  Reflect.ownKeys(obj).forEach(function (key) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = deepClone(obj[key], hash)
    } else {
      // 直接赋值
          // newObj[key] = obj[key];
          // 是否应该保留属性描述符
          Object.defineProperty(newObj, key, Object.getOwnPropertyDescriptor(obj, key));
    }
  })
  return newObj
}