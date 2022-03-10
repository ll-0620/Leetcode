// 劍指 Offer 15. 二進制中1的個數
var hummingWeight = function(n) {
  let res = 0;
  while (n != 0) {
    res++;
    n &= n - 1;
  }
  return res
}