"use strict";
// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
exports.__esModule = true;
function calPoints(operations) {
    var stack = [];
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var value = operations_1[_i];
        if (value === 'C')
            stack.pop();
        else if (value === 'D') {
            var length_1 = stack.length - 1;
            stack.push(parseInt(stack[length_1].toString()) * 2);
        }
        else if (value === '+') {
            var length_2 = stack.length - 1;
            stack.push(parseInt(stack[length_2].toString()) + parseInt(stack[length_2 - 1].toString()));
        }
        else
            stack.push(parseInt(value));
    }
    return stack.reduce(function (a, b) { return a + b; }, 0);
}
;
console.log(calPoints(["5", "2", "C", "D", "+"])); // 30 
