function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  RECURSIVE SOLUTION
// var inorderTraversal = function (root) {
//   const res = [];
//   helper(root);
//   return res;

//   function helper(treeNode) {
//     if (treeNode != null || treeNode != undefined) {
//         helper(treeNode.left)
//         res.push(treeNode.val)
//         helper(treeNode.right)
//     }
//   }
// };

// STACK SOLUTION
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let curr = root;

  while (curr != null || stack.length) {
    while (curr != null) {
        stack.push(curr);
        curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
};

const rootNode = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
);

inorderTraversal(rootNode);
