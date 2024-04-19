"use strict";
// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.
exports.__esModule = true;
var MyNode = /** @class */ (function () {
    function MyNode(val, prev, next) {
        this.val = val === undefined ? null : val;
        this.prev = prev;
        this.next = next;
    }
    return MyNode;
}());
var BrowserHistory = /** @class */ (function () {
    function BrowserHistory(homepage) {
        this.current = new MyNode(homepage, null, null);
    }
    BrowserHistory.prototype.visit = function (url) {
        var node = new MyNode(url, this.current, null);
        this.current.next = node;
        this.current = this.current.next;
    };
    BrowserHistory.prototype.back = function (steps) {
        while (this.current.prev !== null && steps > 0) {
            this.current = this.current.prev;
            steps -= 1;
        }
        return this.current.val || "";
    };
    BrowserHistory.prototype.forward = function (steps) {
        while (this.current.next !== null && steps > 0) {
            this.current = this.current.next;
            steps--;
        }
        return this.current.val || "";
    };
    return BrowserHistory;
}());
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// test case
var browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1)); // Output: "facebook.com"
console.log(browserHistory.back(1)); // Output: "google.com"
console.log(browserHistory.forward(1)); // Output: "facebook.com"
browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2)); // Output: ""
console.log(browserHistory.back(2)); // Output: "google.com"
console.log(browserHistory.back(7)); // Output: "leetcode.com"
