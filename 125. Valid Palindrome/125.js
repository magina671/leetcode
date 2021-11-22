/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    console.log(s.toLowerCase().replace(/[^a-zA-Z1-9]/g, ""));
  return s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("")
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("ab@a"));
console.log(isPalindrome("0P"));
