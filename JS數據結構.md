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