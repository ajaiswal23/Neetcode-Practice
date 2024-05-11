// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
function containsNearbyDuplicate(nums, k) {
    let left = 0;
    let window = new Set();
    k += 1;
    for (let right = 0; right < nums.length; right++) {
        if (right - left + 1 > k) {
            window.delete(nums[left]);
            left += 1;
        }
        if (window.has(nums[right]))
            return true;
        window.add(nums[right]);
    }
    return false;
}
// test cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // falseconsole.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false
