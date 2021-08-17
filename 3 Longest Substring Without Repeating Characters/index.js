/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (string) {
  let longestUniqString = string[0];

  if (string.length === 0) {
    return 0;
  }

  stringArr = string.split("");

  stringArr.forEach((i, index) => {
    function findUniqStringInRow(row) {
      // if (row.length === 1) return;

      let result = [...row[0]];

      let arr = row.slice(1);
      for (let j = 0; j < arr.length; j++) {
        if (result.includes(arr[j])) {
          break;
        }
        result.push(arr[j]);
      }

      if (result.join('').length > longestUniqString.length) {
        longestUniqString = result.join('')
      }
    }

    findUniqStringInRow(stringArr.slice(index));
  });

  const result = longestUniqString.length;
  return result;
};

lengthOfLongestSubstring("abcdefttt");
