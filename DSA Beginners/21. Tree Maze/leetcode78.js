// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]
// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.
function subsets(nums) {
    var res = [];
    var subset = [];
    var numsLength = nums.length - 1;
    function dfs(index) {
        if (index > numsLength) {
            res.push(__spreadArray([], subset, true));
            return;
        }
        // with number included
        subset.push(nums[index]);
        dfs(index + 1);
        // without the number
        subset.pop();
        dfs(index + 1);
    }
    dfs(0);
    return res;
}
