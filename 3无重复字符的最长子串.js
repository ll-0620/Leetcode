// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// Solution -> 滑动窗口
// 其实就是一个队列, 比如例题中的 abcabcbb，
// 进入这个队列（窗口）为 abc 满足题目要求，
// 当再进入 a，队列变成了 abca，这时候不满足要求。
// 所以，我们要移动这个队列

// 如何移动？
// 我们只要把队列的左边的元素移出就行了，直到满足题目要求
// 一直维持这样的队列，找出队列出现最长的长度时候，求出解
// 时间复杂度：O(n)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n=s.length;
  if(n<=1) return n;
  let left=0, right=0;
  const window = new Map()
  let maxLen=0;
  while(right<n){
      const rightCharIndex=window.has(s[right])? window.get(s[right]) : -1
      left=Math.max(left, rightCharIndex)
      maxLen=Math.max(maxLen, right-left+1)
      window.set(s[right], right+1)
      right++
  }
  return maxLen
};