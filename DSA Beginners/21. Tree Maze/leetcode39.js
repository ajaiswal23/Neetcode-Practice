"use strict";
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function combinationSum(candidates, target) {
    var res = [];
    var candidateLength = candidates.length - 1;
    function dfs(index, subset, target) {
        if (target === 0) {
            res.push(__spreadArray([], subset, true));
            return;
        }
        if (index > candidateLength || target < 0)
            return;
        subset.push(candidates[index]);
        dfs(index, subset, target - candidates[index]);
        subset.pop();
        dfs(index + 1, subset, target);
    }
    dfs(0, [], target);
    return res;
}
;
// test cases
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
