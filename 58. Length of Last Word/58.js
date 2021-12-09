/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const result = s.trim().split("");
  let ans = 0;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === " ") {
      break;
    }
    ans++;
  }
  return ans;
};

lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
