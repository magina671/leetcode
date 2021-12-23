/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
//   debugger;
  if (nums.length === 1) {
    console.log("res", nums[0]);
    return nums[0];
  }

  nums.sort((a, b) => a - b);

  if (nums[0] !== nums[1]) {
    console.log("res", nums[0]);
    return nums[0];
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      console.log("res", nums[i]);
      return nums[i];
    }
    if (i === nums.length - 2) {
      console.log("res", nums[nums.length - 1]);
      return nums[nums.length - 1];
    }
  }
};

singleNumber([1, 1, 2, 4, 2]); // 4
singleNumber([1, 2, 5, 3, 3, 5, 1]); // 2
singleNumber([1]); // 1
