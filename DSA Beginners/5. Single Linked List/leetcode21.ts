// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Definition for singly-linked list.
export {};
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {

  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let head: ListNode | null = null;
  let current: ListNode | null = null;

  while (list1 !== null && list2 !== null) {
    let node: ListNode | null = null;

    if (list1.val < list2.val) {
      node = list1;
      list1 = list1.next;
    } else {
      node = list2;
      list2 = list2.next;
    }

    if (head === null) {
      head = node;
      current = node;
    } else {
      current!.next = node;
      current = current!.next;
    }
  }

  current!.next = list1 !== null ? list1 : list2;
  current = current!.next;

  return head;
}

// test cases
// 1->2->4, 1->3->4
// 1->1->2->3->4->4
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
