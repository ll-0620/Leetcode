// 617. 合并二叉树
// solution -> 递归实现
// 对于二叉树来说，如果我们像遍历数组那样，挨个遍历两颗二叉树中的每个节点，再把他们相加，那问题就比较容易解决了。
// 递归的条件：
// 1. 终止条件：树 1 的节点为 null，或者树 2 的节点为 null
// 2. 递归函数内：将两个树的节点相加后，再赋给树 1 的节点。再递归的执行两个树的左节点，递归执行两个树的右节点

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
  const dfs=(r1, r2)=> {
  // 如果 r1和r2中，只要有一个是null，函数就直接返回
  if(r1==null || r2==null) {
    return r1==null? r2 : r1;
  }
  //让r1的值 等于  r1和r2的值累加，再递归的计算两颗树的左节点、右节点
  r1.val += r2.val;
  r1.left = dfs(r1.left,r2.left);
  r1.right = dfs(r1.right,r2.right);
  return r1;
}
  if(root1==null || root2==null) {
  return root1==null? root2 : root1;
}
return dfs(root1,root2);	
};