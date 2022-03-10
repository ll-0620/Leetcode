// 589. N 叉樹的前序遍歷
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//solution: 遞歸
var preorder = function (root) {
  let ans = new Array()
  dfs = function (node) {
    if (node != null) {
      ans.push(node.val)
      for (const child of root.children) {
        dfs(child)
      }
    }
  }
  dfs(root)
  return ans
}