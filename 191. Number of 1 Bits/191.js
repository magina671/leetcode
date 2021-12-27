/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  console.log("n", n);
  while (n !== 0) {
    n = n & (n - 1);
    res++;
  }

  return res;
};

hammingWeight(00000000000000000000000000001011);
