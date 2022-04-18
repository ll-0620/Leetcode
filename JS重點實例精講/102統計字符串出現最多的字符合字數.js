arr = "an apple a day"
// 算法1 key-value方式

function getMaxCount1(str) {
  var json = {};
  for (let i = 0; i < str.length; i++){
    if (!json[str.charAt(i)]) {
      json[str.charAt(i)] = 1;
    } else {
      json[str.charAt(i)]++;
    }
  }
  var maxCountChar = ''
  var maxCount = 0
  for (var key in json) {
    if (json[key] > maxCount) {
      maxCount = json[key]
      maxCountChar = key
    }
  }
  console.log(`max char=${maxCountChar};total=${maxCount}`) 
}

//算法 2 key-value + forEach
function getMaxCount2(str) {
  var json = {}
  var maxCount = 0, maxCountChar = '';
  str.split('').forEach((item) => {
    // 當前字符出現的次數
    var num = str.split(item).length - 1;
    // console.log(item, num)
    if (num > maxCount) {
      json[item] = num;
      maxCount = num;
      maxCountChar = item
    }
  })
  console.log(`max char=${maxCountChar};total=${maxCount}`) 
}

// 算法3 sort()+lastIndexOf()
function getMaxCount3(str) {
  var maxCount = 0, maxCountChar = '';
  str = str.split('').sort().join('');
  for (var i = 0; i < str.length; i++){
    var c = str[i];
    var charCount = str.lastIndexOf(c) - i + 1;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = c;
    }
    i = str.lastIndexOf(c)
  }
  console.log(`max char=${maxCountChar};total=${maxCount}`) 
}

getMaxCount1(arr)
getMaxCount2(arr)
getMaxCount3(arr)
