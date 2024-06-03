// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

function characterReplacement(s: string, k: number): number {
  let left = 0;
  let longestString = 0;
  let map = new Map();

  // for (let right = 0; right < s.length; right++)
  //   map.set(s[right], (map.get(s[right]) || 0) + 1);

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    // let count = map.get(s[left]);

    let count = Math.max(...Array.from(map.values()));

    if (right - left + 1 - count > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    } else longestString = Math.max(longestString, right - left + 1);
  }

  return longestString;
}

console.log(characterReplacement("ABAB", 2));
// failed
console.log(characterReplacement("BAAAB", 2));
