// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107


// Definition for a binary tree node.
export {}
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null

    if (root.val < val) return searchBST(root.right, val)
    else if (root.val > val) return searchBST(root.left, val)
    else return root
};

// Test Cases

// Test Case 1

console.log(searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 2)) // [2,1,3]

// Test Case 2

console.log(searchBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7)), 5)) // []    


// Iterative Solution

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    
//     while (root) 
//         if (root.val < val) root = root.right
//         else if (root.val > val) root = root.left
//         else return root
//     return null
// };