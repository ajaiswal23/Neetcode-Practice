"use strict";
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
exports.__esModule = true;
function removeElement(nums, val) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      nums.splice(left, 1);
      left--;
    }
    if (nums[right] === val) {
      nums.splice(right, 1);
      right++;
    }
    left++;
    right--;
  }
  return nums.length;
}
function testcases() {
  var nums = [3, 2, 2, 3];
  var val = 3;
  nums = [0, 1, 2, 2, 3, 0, 4, 2];
  val = 2;
  if (removeElement(nums, val) === 5) console.log("Test case 2 is Passed");
  else console.log("Test case 2 is Failed");
}
testcases();
