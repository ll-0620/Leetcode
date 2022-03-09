function search(nums, target) {
  // write code here
    let left = 0;
    let right = nums.length-1
    while(left<=right){
      let mid=Math.floor((left+right)/2)
      if (nums[mid] == target) {
        return mid; 
      }else if(nums[mid] <= target) {
          left=mid+1;
      }else{
          right=mid-1;
      }
      console.log(left,right,mid)
    }
    return -1;
}

nums=[1,2,3,4,5,6,7,8,9,10]
let ans = search(nums, 11)
console.log(ans);