"use strict";
// You are given the root of a binary search tree (BST) and an integer val.
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function searchBST(root, val) {
    if (!root)
        return null;
    if (root.val < val)
        searchBST(root.right, val);
    else if (root.val > val)
        searchBST(root.left, val);
    else
        return root;
}
;
// Test Cases
// Test Case 1
console.log(searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 2)); // [2,1,3]
// Test Case 2
console.log(searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 5)); // []    
