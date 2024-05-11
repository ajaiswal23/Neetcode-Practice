"use strict";
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
// function kthSmallest(root: TreeNode | null, k: number): number {
//   let flag = false;
//   let result = 0;
//   function inorder(node: TreeNode | null) {
//     if (!node || flag) return;
//     inorder(node.left);
//     if (--k === 0) {
//       flag = true;
//       result = node.val;
//       return;
//     }
//     inorder(node.right);
//   }
//   inorder(root);
//   return result;
// }
function kthSmallest(root, k) {
    if (!root)
        return 0;
    var left = kthSmallest(root.left, k);
    if (left)
        return left;
    if (--k === 0 && left) {
        return root.val;
    }
    return kthSmallest(root.right, k);
}
// Test case
// let root = new TreeNode(3);
// root.left = new TreeNode(1);
// root.right = new TreeNode(4);
// root.left.right = new TreeNode(2);
// console.log(kthSmallest(root, 1)); // 1
var root;
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
// console.log(kthSmallest(root, 3)); // 3
console.log(kthSmallest(root, 4)); // 4
