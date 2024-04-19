"use strict";
// Given the head of a singly linked list, reverse the list, and return the reversed list.
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function reverseList(head) {
    var newHead;
    if (head.next === null) {
        newHead = head;
        return newHead;
    }
    newHead = reverseList(head.next);
    if (head && head.next) {
        head.next.next = head;
        head.next = null;
    }
    return newHead;
}
describe("reverseList", function () {
    it("should reverse a list with multiple nodes", function () {
        var _a, _b, _c, _d, _e;
        var node3 = new ListNode(3);
        var node2 = new ListNode(2, node3);
        var node1 = new ListNode(1, node2);
        var reversed = reverseList(node1);
        expect(reversed === null || reversed === void 0 ? void 0 : reversed.val).toBe(3);
        expect((_a = reversed === null || reversed === void 0 ? void 0 : reversed.next) === null || _a === void 0 ? void 0 : _a.val).toBe(2);
        expect((_c = (_b = reversed === null || reversed === void 0 ? void 0 : reversed.next) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.val).toBe(1);
        expect((_e = (_d = reversed === null || reversed === void 0 ? void 0 : reversed.next) === null || _d === void 0 ? void 0 : _d.next) === null || _e === void 0 ? void 0 : _e.next).toBeNull();
    });
    it("should reverse a list with a single node", function () {
        var node1 = new ListNode(1);
        var reversed = reverseList(node1);
        expect(reversed === null || reversed === void 0 ? void 0 : reversed.val).toBe(1);
        expect(reversed === null || reversed === void 0 ? void 0 : reversed.next).toBeNull();
    });
    it("should handle an empty list", function () {
        var reversed = reverseList(null);
        expect(reversed).toBeNull();
    });
});
