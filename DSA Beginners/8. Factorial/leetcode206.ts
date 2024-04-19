
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

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



function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null;
  if (head.next === null){
    newHead = head;
    return newHead
  }
  newHead = reverseList(head!.next)
  if (head && head.next) {
    head.next.next = head;
    head.next = null;
  }

  return newHead;
}

describe("reverseList", () => {
  it("should reverse a list with multiple nodes", () => {
    const node3 = new ListNode(3);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    const reversed = reverseList(node1);
    expect(reversed?.val).toBe(3);
    expect(reversed?.next?.val).toBe(2);
    expect(reversed?.next?.next?.val).toBe(1);
    expect(reversed?.next?.next?.next).toBeNull();
  });

  it("should reverse a list with a single node", () => {
    const node1 = new ListNode(1);
    const reversed = reverseList(node1);
    expect(reversed?.val).toBe(1);
    expect(reversed?.next).toBeNull();
  });

  it("should handle an empty list", () => {
    const reversed = reverseList(null);
    expect(reversed).toBeNull();
  });
});