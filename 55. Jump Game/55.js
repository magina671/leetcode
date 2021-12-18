/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let lastIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) {
      lastIndex = i;
    }
  }

  console.log(lastIndex === 0);
  return lastIndex === 0;
};

// var canJump = function (nums) {
//   const len = nums.length;

//   let jumpIndex = 0;
//   let jumpValue = nums[0];

//   let dynArr = [];

//   if (len <= 1) {
//     console.log("res with 0 length is", !(nums[0] > 1));
//     return !(nums[0] > 1);
//   }

//   for (let i = 0; i < len - 1; i++) {
//     let intoArr = [];
//     for (let j = 0; j < len; j++) {
//       if (i === jumpValue + jumpIndex - 1 && j >= jumpIndex - 1) {
//         intoArr[j] = jumpValue;
//       } else {
//         intoArr[j] = 0;
//       }
//     }
//     dynArr[i] = intoArr;
//     if (i === jumpValue + jumpIndex - 1) {
//       jumpIndex += jumpValue;
//       jumpValue = nums[i];
//     }
//   }
//   console.log("dynArr", dynArr);

//   console.log("res", dynArr[len - 1][len - 1] !== 0);

//   return dynArr[len - 1][len - 1] !== 0;
// };

canJump([2, 3, 1, 1, 4]); // true
canJump([3, 1, 2, 0, 4]); // false
canJump([1]); // true
canJump([2]); // false
canJump([2, 1, 3]); // true
canJump([3, 1, 3]); // false
canJump([0]); // true
canJump([2, 0]); // true
