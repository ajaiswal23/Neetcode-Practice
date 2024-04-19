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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function reverseList(head) {
    if (head === null)
        return null;
    var prev = head;
    var current = head.next;
    while (current !== null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head.next = null;
    return prev;
}
// test case
var node5 = new ListNode(5);
var node4 = new ListNode(4, node5);
var node3 = new ListNode(3, node4);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);
var node_head = reverseList(node1); // [5,4,3,2,1]
while (node_head !== null) {
    console.log(node_head.val);
    node_head = node_head.next;
}
