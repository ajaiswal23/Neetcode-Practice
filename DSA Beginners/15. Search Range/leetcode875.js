"use strict";
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
exports.__esModule = true;
function timeTakenToEatPiles(piles, k) {
    var timeTaken = 0;
    for (var _i = 0, piles_1 = piles; _i < piles_1.length; _i++) {
        var val = piles_1[_i];
        timeTaken += Math.ceil(val / k);
    }
    return timeTaken;
}
function minEatingSpeed(piles, h) {
    var _a = [1, Math.max.apply(1, piles)], left = _a[0], right = _a[1];
    // banana per hour
    var bph, timeTaken;
    var result = Infinity;
    while (left <= right) {
        bph = Math.trunc((left + right) / 2);
        timeTaken = timeTakenToEatPiles(piles, bph);
        if (timeTaken > h)
            left = bph + 1;
        else {
            result = Math.min(result, bph);
            right = bph - 1;
        }
    }
    return result;
}
// test cases
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
