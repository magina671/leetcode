/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 
//  how solution works
//  I go through nums array and set index value of number to negative;
//  if this number was already in array in will be negative
//  otherwise positive;
// 
var findDisappearedNumbers = function (nums) {
  const res = [];

  console.log('nums BEFORE', nums)

  for (let i = 0; i < nums.length; i++) {
    const curr = Math.abs(nums[i]);
    console.group('Iteration')
    console.log('i', i)
    console.log("curr", curr);
    console.log(" -Math.abs(nums[curr - 1])", -Math.abs(nums[curr - 1]));
    nums[curr - 1] = -Math.abs(nums[curr - 1]);
    console.log("new index (nums[curr - 1])", curr - 1);
    console.log(nums);
    console.groupEnd();
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        res.push(i + 1);
    }
  }

  console.log(nums);

  return res;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1, 8]); // [5, 6, 9]
// findDisappearedNumbers([1, 1]); // 2
