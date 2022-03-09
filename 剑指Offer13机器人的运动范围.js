// 剑指 Offer 13. 机器人的运动范围
// BFS
/** 
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  // 创造一个二维数组
  const arr = new Array(m).fill().map(_ => new Array(n).fill(0))
  // 创建一个队列，从 (0, 0) 开始搜索
  const queue = [[0, 0]]
  // 计数器
  let counter = 0

  while (queue.length) {
    const [x, y] = queue.shift()
    // 越界
    if (x >= m || y >= n)  continue
    // 遍历过
    if (arr[x][y]) continue
    // 设置遍历过的标识
    arr[x][y] = 1

    if (bitSum(x) + bitSum(y) <= k) {
      // 符合条件的计数
      counter++
      // 将右、下两格加入队列
      queue.push([x + 1, y], [x, y + 1])
    }
  }

  return counter

  function bitSum(n) {
    let res = 0
    while (n) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    return res
  }
};

//DFS
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
  // 创造一个二维数组
  const arr = new Array(m).fill().map(_ => new Array(n).fill(0))
  // 计数器
  let counter = 0
  // 从 （0，0）开始搜索
  run(0, 0)

  return counter

  function run(i, j) {
    // 越界返回
    if (i >= m || j >= n) return
    // 已经遍历过，返回
    if (arr[i][j]) return
    // 设置遍历标记
    arr[i][j] = 1
    if (bitSum(i) + bitSum(j) <= k) {
      // 符合条件的计数器 + 1，继续遍历 右 / 下两个方向
      counter++
      run(i + 1, j)
      run(i, j + 1)
    }
  }

  function bitSum(n) {
    let res = 0
    while (n) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    return res
  }
};
