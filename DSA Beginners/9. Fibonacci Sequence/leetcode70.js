"use strict";
// You are climbing a staircase. It takes n steps to reach the top.
exports.__esModule = true;
function climbStairs(n, count, memo) {
    if (count === void 0) { count = 0; }
    if (memo === void 0) { memo = {}; }
    if (n in memo) {
        return memo[n];
    }
    if (n === 0) {
        count += 1;
        return count;
    }
    if (n < 0) {
        return count;
    }
    memo[n] = climbStairs(n - 1, count, memo) + climbStairs(n - 2, count, memo);
    return memo[n];
}
;
// test cases
// 44
// 1134903170
if (climbStairs(44) === 1134903170) {
    console.log('pass');
}
