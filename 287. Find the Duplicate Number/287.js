/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let res;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      res = nums[i];
    }
  }

  return res;
};

findDuplicate([1, 2, 3, 4, 4, 5, 6]);
