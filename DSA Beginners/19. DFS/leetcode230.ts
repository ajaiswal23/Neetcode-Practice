// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

//   Definition for a binary tree node.

export {};
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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

function kthSmallest(
  root: TreeNode | null,
  k: number
): number {

  if (!root) return 0;

  let left = kthSmallest(root.left, k);
  if (left) return left;

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

let root;
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
// console.log(kthSmallest(root, 3)); // 3
console.log(kthSmallest(root, 4)); // 4
