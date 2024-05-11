// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

//  Definition for a binary tree node.
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

function rightSideView(root: TreeNode | null): number[] {
  let queue: TreeNode[] = [];
  let res: number[] = [];

  if (root) queue.push(root);

  while (queue.length) {
    let queueLength = queue.length;
    res.push(queue[queueLength-1].val)
    while (queueLength--) {
      let current = queue.shift()!;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return res;
}
