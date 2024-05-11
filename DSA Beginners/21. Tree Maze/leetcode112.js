"use strict";
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function hasPathSum(root, targetSum) {
    if (root === null)
        return false;
    targetSum -= root.val;
    if (root.left == null && root.right == null)
        return targetSum === 0;
    return (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum));
}
// test case
var root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
console.log(hasPathSum(root, 22)); // expect true
root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(root, 5)); // expect false
root = new TreeNode(1, new TreeNode(2));
console.log(hasPathSum(root, 1));
