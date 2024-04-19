// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45
export {};
function climbStairs(n: number, count = 0, memo = {}): number {

    if (n in memo) {
        return memo[n]
    }
    if (n === 0) {
        count += 1;
        return count
    }
    if (n < 0) {
        return count
    }

    memo[n] = climbStairs(n-1, count, memo) + climbStairs(n-2, count, memo)
    return memo[n]
};

// test cases
// 44
// 1134903170
if (climbStairs(44) === 1134903170) {
    console.log('pass')
}

