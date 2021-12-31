/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  if (Number(nums[0]) !== 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0] + 1;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
    if (i === nums.length - 2) {
      return nums[i] + 2;
    }
  }
};

console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 0
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([0, 2])); // 1
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 0
console.log(missingNumber([0, 2, 3, 4, 5, 6, 7, 8, 9])); // 1
console.log(missingNumber([0, 2, 3, 4, 5, 6, 7, 1, 9])); // 8
console.log(missingNumber([0, 2, 3, 4, 5, 6, 7, 1, 8])); // 9
