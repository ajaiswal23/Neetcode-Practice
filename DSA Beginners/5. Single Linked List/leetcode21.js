"use strict";
// You are given the heads of two sorted linked lists list1 and list2.
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    if (list1 === null)
        return list2;
    if (list2 === null)
        return list1;
    var head = null;
    var current = null;
    while (list1 !== null && list2 !== null) {
        var node = null;
        if (list1.val < list2.val) {
            node = list1;
            list1 = list1.next;
        }
        else {
            node = list2;
            list2 = list2.next;
        }
        if (head === null) {
            head = node;
            current = node;
        }
        else {
            current.next = node;
            current = current.next;
        }
    }
    current.next = list1 !== null ? list1 : list2;
    current = current.next;
    return head;
}
// test cases
// 1->2->4, 1->3->4
// 1->1->2->3->4->4
var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(list1, list2));
