// var cuttingRope = function(n) {
//     if(n<=3) return n-1;
//     let a = Math.floor(n / 3), b= n %3
//     if(b==0) return Math.pow(3, a)
//     if(b==1) return Math.pow(3, a-1)*4
//     return Math.pow(3, a)*2
// };

var cuttingRope = function(n) {
  let dp = new Array(n+1).fill(1);
  // dp[i]表示长度为i的绳子被剪成m段，每段乘机的最大值
  dp[2] = 1;
  // 因为m>1，所以dp[2] = 1而不是2
  for(let i = 3; i < n + 1; i++){
      // i-j >= 2。j代表第一次剪掉的长度，剪掉1没用，所以从2开始，剩余的长度i-j怎么减直接取dp[i-j]
      for (let j = 2; j < i; j++){
          dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
      }
  }
  return dp[n] 
};