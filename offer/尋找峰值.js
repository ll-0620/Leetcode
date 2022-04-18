
function findPeakElement( nums ) {
  // write code here
  if(nums.length<=1) return nums.length-1
  let left=0, right=1;
  while(right<nums.length){
      if(nums[left]<=nums[right]){
          left++;
          right++;
      }else{
          return left;
      }
  }
  return nums.length-1
}

//或二分查找
function findPeakElement( nums ) {
  // write code here
  let left=0;
  let right = nums.length-1;
  while(left<right){
      let mid=Math.floor(left+(right-left)/2);
      if(nums[mid]<nums[mid+1]) left = mid + 1;
      else right = mid;
  }
  return left;
}