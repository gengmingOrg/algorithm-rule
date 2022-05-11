/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  var check = checkRoot(p, q)
  return check
};

var checkRoot = function(p, q) {
  if(!p && !q) return true
  if (!p || !q) return false
  // 判断 左节点 等于 左节点 右节点等于右节点 就是相等的树
  return p.val === q.val && checkRoot(p.right, q.right) && checkRoot(p.left, q.left)
}