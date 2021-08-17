var twoSum = function (nums, target) {
  if (nums.length < 2 || nums.length > Math.pow(10, 3)) {
    return;
  }
  if (target < Math.pow(-10, 9) || target > Math.pow(10, 9)) {
    return;
  }
  let result = [];
  function recursion(nums, index) {
    if (nums.length === 1) {
      return [];
    }
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[0] + nums[i + 1] === target) {
        result = [index, i + index + 1];
        return;
      }
    }
    if (result.length) {
      return;
    }
    ++index;
    recursion(nums.slice(1), index);
  }
  recursion(nums, 0);
  return result;
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 12], 9));
console.log(twoSum([3, 2, 3], 6));
//  console.log(twoSum([6, 12, 2, 9, 7], 9));