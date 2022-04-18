/**
 * Set的实例关于增删改查的方法：
 * add() delete() has() clear()
 *  */

const s = new Set();

// add() 添加某个值，返回 Set 结构本身
// 当添加实例中已经存在的元素，set不会进行处理添加
console.log(s.add(1).add(2).add(2))
// delete() 删除某个值，返回一个布尔值，表示删除是否成功
console.log(s.delete(2), s.delete(2))
// has() 返回一个布尔值，判断该值是否为Set的成员
console.log(s.has(4), s.has(1))
// clear() 清除所有成员，没有返回值
s.clear()
console.log(s)

/**
 * 关于遍历的方法，有如下：
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 */