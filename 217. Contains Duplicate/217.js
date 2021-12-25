/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  if (nums.length === 1) {
    return false;
  }
  
  nums.sort((a, b) => a - b);

  let res = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      res = true;
      break;
    }
  }

  return res;
};

// HASH MAP SOLUTION
// var containsDuplicate = function (nums) {
//   let res = false;
//   nums.reduce((acc, item) => {
//     if (acc[item]) {
//       res = true;
//     }
//     acc[item] = 1;

//     return acc;
//   }, {});

//   return res;
// };

containsDuplicate([1, 2, 3, 4, 5]);
