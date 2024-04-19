// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

// function fib(n: number): number {
//     let [first, second] = [0 , 1];
//     let result = 0

//     if (n < 2 ) return n

//     while (n-- > 1){
//         result = first + second;
//         first = second;
//         second = result
//     }
//     return result
// };


function fib(n: number, map = { 0: 0, 1: 1 }): number {
    if (map[n] !== undefined) return map[n];
    map[n] = fib(n - 1, map) + fib(n - 2, map);
    return map[n];  
};
