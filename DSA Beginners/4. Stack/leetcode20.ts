// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
export {};

function isValid(s: string): boolean {
    let brackets: {[key:string]:string} = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            if (stack.pop() !== brackets[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};


// Time complexity: O(n)
// Space complexity: O(n)
// n = s.length

// Test cases
let s: string;
s = "()";
console.log(isValid(s)); // true

s = "()[]{}";
console.log(isValid(s)); // true

s = "(]";
console.log(isValid(s)); // false

s = "([)]";
console.log(isValid(s)); // false

