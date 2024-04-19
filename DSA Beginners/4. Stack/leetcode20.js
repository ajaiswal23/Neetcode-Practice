"use strict";
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
exports.__esModule = true;
function isValid(s) {
    var brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            if (stack.pop() !== brackets[s[i]]) {
                return false;
            }
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}
;
// Time complexity: O(n)
// Space complexity: O(n)
// n = s.length
// Test cases
var s;
s = "()";
console.log(isValid(s)); // true
s = "()[]{}";
console.log(isValid(s)); // true
s = "(]";
console.log(isValid(s)); // false
s = "([)]";
console.log(isValid(s)); // false
