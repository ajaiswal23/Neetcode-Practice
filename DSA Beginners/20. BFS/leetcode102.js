"use strict";
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function levelOrder(root) {
    var queue = [];
    var res = [];
    var level = 0;
    if (root)
        queue.push(root);
    while (queue.length) {
        var queueLength = queue.length;
        res[level] = [];
        while (queueLength--) {
            var current = queue.shift();
            res[level].push(current.val);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
        }
        level++;
    }
    return res;
}
// test case
var root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root)); // [[3],[9,20],[15,7]]
root = new TreeNode(1);
console.log(levelOrder(root)); // [[1]]
