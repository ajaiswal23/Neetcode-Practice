"use strict";
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
exports.__esModule = true;
function countStudents(students, sandwiches) {
    var eaten = 0;
    var len = students.length;
    var loop = len;
    while (loop) {
        if (students[0] === sandwiches[0]) {
            eaten++;
            students.shift();
            sandwiches.shift();
            loop = students.length;
        }
        else {
            var pushed_student = students.shift();
            students.push(pushed_student);
            loop--;
        }
    }
    return len - eaten;
}
;
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
