"use strict";
// You are given an m x n integer matrix matrix with the following two properties:
exports.__esModule = true;
function searchMatrix(matrix, target) {
    var _a = [matrix.length, matrix[0].length], ROW = _a[0], COL = _a[1];
    var _b = [0, ROW - 1], top = _b[0], bottom = _b[1];
    var mid;
    while (top <= bottom) {
        mid = Math.floor((top + bottom) / 2);
        if (matrix[mid][COL - 1] < target)
            top = mid + 1;
        else if (matrix[mid][0] > target)
            bottom = mid - 1;
        else
            break;
    }
    if (!(top <= bottom))
        return false;
    var _c = [0, COL - 1], left = _c[0], right = _c[1];
    while (left <= right) {
        var mid_col = Math.floor((left + right) / 2);
        if (matrix[mid][mid_col] < target)
            left = mid_col + 1;
        else if (matrix[mid][mid_col] > target)
            right = mid_col - 1;
        else
            return true;
    }
    return false;
}
;
// test case 1
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
// test case 2
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false
