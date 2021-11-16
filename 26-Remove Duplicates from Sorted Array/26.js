/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      continue;
    }
    nums[result] = nums[i]
    result++;
  }

  return result
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5
