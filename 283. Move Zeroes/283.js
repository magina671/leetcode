/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let availableIndexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      availableIndexes.push(i);
    }
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && j < availableIndexes.length) {
      nums[i] = nums[availableIndexes[j]];
      nums[availableIndexes[j]] = 0;
      j++;
    } else {
        availableIndexes.shift()
    }
  }
};

moveZeroes([1, 0, 0, 0]); // [1, 0, 0, 0]
moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([0, 1, 0, 2, 3, 0, 0, 0, 1, 0]); // [1, 2, 3, 1, 0, 0, 0, 0, 0, 0];
moveZeroes([0, 0, 0, 0, 1]); // [1, 0, 0, 0, 0]
moveZeroes([1, 0, 0, 0, 2]); // [1, 2, 0, 0, 0]
moveZeroes([1, 2, 3, 0, 0, 0, 4]); // [1, 2, 3, 4, 0, 0, 0]
