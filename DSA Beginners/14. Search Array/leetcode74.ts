// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104
export {}
function searchMatrix(matrix: number[][], target: number): boolean {
    let [ROW, COL] = [matrix.length , matrix[0].length ]
    
    let [top, bottom] = [0, ROW - 1]
    let mid;
    while (top <= bottom){
        mid = Math.floor((top + bottom)/2)

        if (matrix[mid][COL - 1] < target)
            top = mid + 1
        else if (matrix[mid][0] > target)
            bottom = mid - 1
        else
        break;
    }

    if (!(top <= bottom))
        return false

    let [left, right] = [0, COL - 1]

    while (left <= right) {
      let mid_col = Math.floor((left + right) / 2);

      if (matrix[mid][mid_col] < target) left = mid_col + 1;
      else if (matrix[mid][mid_col] > target) right = mid_col - 1;
      else return true;
    }
    return false;
 
};

// test case 1
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true

// test case 2
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false