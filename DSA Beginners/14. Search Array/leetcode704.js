"use strict";
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
exports.__esModule = true;
function search(nums, target) {
    var _a = [0, nums.length - 1], left = _a[0], right = _a[1];
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            return mid;
    }
    return -1;
}
;
// test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
