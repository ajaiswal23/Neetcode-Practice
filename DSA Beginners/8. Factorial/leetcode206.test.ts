// Test Case 1: Reversing a list with multiple elements
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
console.log(reverseList(list1)); // Output: ListNode { val: 5, next: ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } } } }

// Test Case 2: Reversing a list with two elements
const list2 = new ListNode(1);
list2.next = new ListNode(2);
console.log(reverseList(list2)); // Output: ListNode { val: 2, next: ListNode { val: 1, next: null } }

// Test Case 3: Reversing an empty list
const list3 = null;
console.log(reverseList(list3)); // Output: null

// Test Case 4: Reversing a list with a single element
const list4 = new ListNode(1);
console.log(reverseList(list4)); // Output: ListNode { val: 1, next: null }

// Test Case 5: Reversing a list with three elements
const list5 = new ListNode(1);
list5.next = new ListNode(2);
list5.next.next = new ListNode(3);
console.log(reverseList(list5)); // Output: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } }
