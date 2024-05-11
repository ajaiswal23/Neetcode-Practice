// Given a string s, find the length of the longest
// substring
//  without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
function lengthOfLongestSubstring(s) {
    let left = 0;
    let longestSubstring = 0;
    let duplicate = new Set();
    for (let right = 0; right < s.length; right++) {
        while (duplicate.has(s[right])) {
            duplicate.delete(s[left]);
            left += 1;
        }
        duplicate.add(s[right]);
        longestSubstring = Math.max(longestSubstring, right - left + 1);
    }
    return longestSubstring;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
// more complex console.log test cases s > 20
console.log(lengthOfLongestSubstring("abcabcbbabcabcbbabcabcbbabcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbabcabcbbabcabcbbabcabcbbabcabcbb"));
console.log(lengthOfLongestSubstring("pwwkewabcabcbbabcabcbbabcabcbbabcabcbb"));
console.log(lengthOfLongestSubstring("pwwkewabcabcbbabcabcbbabcabcbbabcabcbbabcabcbb"));
