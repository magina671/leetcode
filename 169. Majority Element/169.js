/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countedObj = nums.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Number(Object.entries(countedObj).sort((a, b) => b[1] - a[1])[0][0]);
};

majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 4, 3, 4, 2, 2]);
