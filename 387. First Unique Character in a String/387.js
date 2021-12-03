/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  s.toLowerCase();

  const hashMap = s.split("").reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  console.log("hashMap", hashMap);

  return s.split("").findIndex((item) => {
    return hashMap[item] === 1;
  });
};

console.log(firstUniqChar("aaacccvvv"));
