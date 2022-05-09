/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 判断是不是对称树 就是判断这个树的 左节点 的左节点 等不等于 右节点的右节点 
// 并且有一方为空就返回false
// 递归的方法
const check = (p, q) => {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val == q.val && check(p.left, q.right) && check(p.right, q.left)
}
var isSymmetric = function (root) {
  return check(root, root);
};