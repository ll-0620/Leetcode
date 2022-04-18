// p.s. 不判斷大小寫

arr = 'aAsdwNj'
arr1 = 'aAsdsaA'
// 算法 1
/**
 * 將字符串逆序處理，
 * 與原來的字符串進行比較
 */

function isPalindromicStr1(str) {
  str = str.toLowerCase();
  var a = str.split('')
  return str === a.reverse().join('')
}

console.log(isPalindromicStr1(arr))
console.log(isPalindromicStr1(arr1))

//算法 2
/**
 * 
 */

