var arr = 'an apple a day.'
// 算法 1 key-value

function removeDuplicateChar1(str) {
  var result = [];
  var json = {};
  for (let i = 0; i < str.length; i++){
    var char = str[i];
    if (!json[char]) {
      json[char] = true
      result.push(char);
    } 
  }
  return result.join('');
}

function removeDuplicateChar2(str) {
  return Array.prototype.filter.call(str, (char, index, arr) => arr.indexOf(char) === index).join('')
}

console.log(removeDuplicateChar1(arr))
console.log(removeDuplicateChar2(arr))
