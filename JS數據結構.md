## 運算符
**typeof運算符**
可以返回變量或是表達式的類型

**JS中分為兩種數據類型**
1. 原始數據類型: null, undefined, 字符串, 數, 布爾值, Symbol(ES6新引入的，表示獨一無二的值)
2. 派生數據類型: JS對象, 包括: 函數/數組/正規表達式 等等

**delete運算符**

```
    var myObj = {name: 'john', age: 22};
    delete myObj.age;
    console.log(myObj)
```

**true & false**
數值類型|轉換成boolean
---|:--:
undifined|false
null|false
boolean|*true*是true,*false*是false
number|+0、-0和NaN都是false, 其他是true
string|如果為空(長度為0)=false, 其他是true
object|true

**== & ===**
1. 使用==時，不同類型的值也可以被看作相等
   
   ![](/js-image/equals.png "")
   toNumber:
   ![](/js-image/toNumber.jpg "toNumber")
   toPrimitive:
   ![](/js-image/toPrimitive.jpg "toPrimitive")

2. 使用===時 必須完全一致才會返回true

## ES6

**let const** 

let: 不允許重複聲明變量 \
const: 定義的變量是只讀的，也就是常量

**模板字面量**

創建字符串時，不需要再拼接!
```
const book={
  name:'小紅帽'
};
console.log(`你正在閱讀${book.name}`)
```

**箭頭函數**

**函數的參數默認值**

**聲明展開和剩餘參數**

## 數組
**初始化**
```
let temp=new Array(); 
let temp1=[];
let week=new Array(7);
let day=new Array('mon','tue','wed','thus','fri','sat','sun');
let day1=['mon','tue','wed','thus','fri','sat','sun'];
```
**使用push方法**
數值插入數組尾部 `number.push(7, 8)`

或是賦值給最後一個空位上的元素 `number[number.length] = 6`

**使用unshift方法**
數值插入數組開頭 `number.unshift(-1, 0)`

**使用pop方法**
刪除數組中最後一位元素 `number.pop()`

**使用shift方法**
刪除數組中第一位元素 `number.shift()`

#### 通過shift和unshift方法，就可以模擬基本的對列數據結構!

**常用的數組方法:**
![數組方法](/js-image/array_methods.png "數組方法")


*迭代器函數*
1. `every()` 迭代數組中每個元素，直到返回false
2. `some()` 迭代數組中每個元素，直到返回true
3. `forEach()` 迭代整個數組，和for循環作用一樣
4. `map()` 迭代整個數組，並返回一個新數組，由返回值組成
5. `filter()` 迭代整個數組，返回一個新數組，由函數返回為true的元素組成
6. `reduce()` 

**ES6新增的數組功能:**
![數組方法es6+](/js-image/array_es6+.png "數組方法es6")

1. `for...of`
2. `@@interator`
3. `entires、keys、values`
4. `from()` 根據已有數組創建一個新數組
5. `of()` 根據傳入參數創建一個新數組
6. `fill(value, start, end)` 用靜態值填充函數
  ```
  let ones = Array(6).fill(1); //[1,1,1,1,1,1]
  ```
7. `copyWithin()`

**排序**
1. `sort()` 正序 ***注意使用方式:** `number.sort((a,b)=>a-b)`
2. `reverse()` 倒序
   
**搜索**
1. `indexOf()` 返回与参数匹配的第一个元素的索引；
2. `lastIndexOf()` 返回与参数匹配的最后一个元素的索引。

\*ES6\
3. `find()`\
4. `findIndex()`

\*ES7\
5. `includes()`

**others**
1. `toString()` 數組轉字符串
1. `join()` 數組轉字符串，改變逗號對應的值


***
有一種數據類型可以確保屬性是私有的-> weakMap

**常用方法**
1. 取整:丢弃小数部分,保留整数部分 `parseInt(7/2)` // 3
2. 向上取整:有小数就整数部分加1 `Math.ceil(7/2)` // 4
3. 向下取整:丢弃小数部分 `Math.floor(7/2)` // 3
4. 四舍五入 `Math.round(7/2)` // 3