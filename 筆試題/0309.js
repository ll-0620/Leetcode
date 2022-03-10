// 1. 將JSON字符串中的所有key值首字母改成大寫
// 2. 冒泡排序
/**
 * Example:  
 * {
      "name": "jack",
      "age": "19",
      "address": "beijing"
 * }
*/



function toUpperCase1(json) {
  // 將json解析為Object對象
  let obj = JSON.parse(json)
  let newObj = {}
  let tempKey, currentValue, upperCase, arr
  // 遍例obj對象的屬性 - key值
  for (let i in obj) {
    currentValue = obj[i]
    // 字符串切割為數組
    arr = i.split('')
    // 數組的第一個元素轉換為"大寫字母"
    upperCase = arr[0].toUpperCase()
    // 替換第一個元素
    arr.splice(0, 1, upperCase)
    // 將數組拼接為字符串-新key值
    tempKey = arr.join('')
    // 將key 值賦值給newObj
    newObj[tempKey] = currentValue
  }
  // 將newObj轉換為json字符
  return JSON.stringify(newObj)
}



let json = {
  "name": "jack",
  "age": "19",
  "address": "beijing"
}

// JSON.stringify() Object轉為JSON
// JSON.parse() JSON轉為Object

console.log(toUpperCase1(JSON.stringify(json)))