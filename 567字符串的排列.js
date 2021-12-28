// 567. 字符串的排列
// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。
// 如果是，返回 true；否则，返回 false。
// 换句话说，s1 的排列之一是 s2 的子串。

// solution -> 滑動窗口
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  // 先处理 s1， 利用map 列个清单 记录字符出现的 种类 和 次数 
  let need = new Map();
  for (let i of s1) {
      need.set(i, need.has(i) ? need.get(i) + 1 : 1);
  }
  // 现在处理s2 看看有没有这样一个子串 
  let l = r = 0;
  let window = new Map();
  let valid = 0;
  while (r < s2.length) {
      if (need.has(s2[r])) {
          window.set(s2[r], window.has(s2[r]) ? window.get(s2[r]) + 1 : 1);
          if (window.get(s2[r]) == need.get(s2[r])) valid++; 
          // s2[r]这个所需字符全了  valid++
      }
      r++;
      while (r - l >= s1.length) {
          if (valid == need.size) return true; // 所有字符种类都找全了 成功✅
          if (need.has(s2[l])) {
              if (window.get(s2[l]) == need.get(s2[l])) valid--;
              window.set(s2[l], window.get(s2[l]) - 1);
          }
          l++;
      }
  }
  return false;
};