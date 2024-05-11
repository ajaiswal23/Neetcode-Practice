// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

// Example 1:

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

// Constraints:

// n == nums.length
// 1 <= n <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104

function maxSubarraySumCircular(nums: number[]): number {
  let [currMax, sumMax] = [0, nums[0]];
  let [currMin, sumMin] = [0, nums[0]];
  let total = 0;

  for (let val of nums) {
    currMax = Math.max(currMax + val, val);
    sumMax = Math.max(currMax, sumMax);

    currMin = Math.min(currMin + val, val);
    sumMin = Math.min(currMin, sumMin);

    total += val;
  }

  if (total - sumMin === 0) return sumMax;
  else return Math.max(sumMax, total - sumMin);
}

// test cases

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
console.log(maxSubarraySumCircular([5, -3, 5])); // 10
console.log(maxSubarraySumCircular([-3, -2, -3])); // -2
console.log(
  maxSubarraySumCircular([
    5, -19, 10, -15, 22, -2, -11, 28, -29, 10, 1, 2, 22, -23, -9, -30, -6, -9,
    1, 8, 24, 2, 21, 29, 10, -25, 18, 30, 1, 9,
  ])
); // 152