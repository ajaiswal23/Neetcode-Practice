// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function buildTree(preorder, inorder) {
    let myMap = new Map();
    inorder.forEach((value, index) => {
        myMap.set(value, index);
    });
    function buildTreeHelper(pre_start, pre_length, in_start, in_length) {
        if (pre_start > pre_length || in_start > in_length)
            return null;
        const root = new TreeNode(preorder[pre_start]);
        const in_root_index = myMap.get(root.val);
        const nums_left = in_root_index - in_start;
        // Recursively build the left subtree
        root.left = buildTreeHelper(pre_start + 1, pre_start + nums_left, in_start, in_root_index - 1);
        root.right = buildTreeHelper(pre_start + nums_left + 1, pre_length, in_root_index + 1, in_length);
        // Return the current root node
        return root;
    }
    return buildTreeHelper(0, preorder.length, 0, inorder.length);
}
// Test Cases
const preorder1 = [3, 9, 20, 15, 7];
const inorder1 = [9, 3, 15, 20, 7];
console.log(buildTree(preorder1, inorder1)); // Expected output: [3,9,20,null,null,15,7]
// const preorder2 = [-1];
// const inorder2 = [-1];
// console.log(buildTree(preorder2, inorder2)); // Expected output: [-1]
const preorder3 = [1, 2, 4, 5, 3, 6];
const inorder3 = [4, 2, 5, 1, 6, 3];
console.log(buildTree(preorder3, inorder3)); // Expected output: [1,2,null,null,3,4,null,null,5]
export {};
// const preorder4 = [1, 2, 3, 4, 5];
// const inorder4 = [5, 4, 3, 2, 1];
// console.log(buildTree(preorder4, inorder4)); // Expected output: [1,null,2,null,3,null,4,null,5]
