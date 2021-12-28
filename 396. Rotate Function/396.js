/**
 * @param {number[]} nums
 * @return {number}
 */

function maxRotateFunction(nums) {
  let i,
    sum_nums = 0,
    r = 0,
    max_r;
  debugger;
  for (i = 0; i < nums.length; i++) {
    sum_nums += nums[i];
    r += nums[i] * i;
  }
  for (max_r = r, i = nums.length - 1; i >= 0; i--) {
    r += sum_nums - nums.length * nums[i];
    if (max_r < r) max_r = r;
  }
  return max_r;
}

// function maxRotateFunction(nums) {
//   if (nums.length === 0) return 0;

//   const numsLength = nums.length;

//   let result = [];

//   for (let j = numsLength; j > 0; j--) {
//     let current = 0;

//     for (let i = 0; i < numsLength; i++) {
//       current += ((i + j) % numsLength) * nums[i];
//     }

//     result.push(current);
//   }

//   return Math.max(...result);
// }

// var maxRotateFunction = function (nums) {
//   let max;
//   let arr = []

//   for (let i = 0; i < nums.length; i++) {
//     let tempIndex = i;

//     let iterationMax = nums.reduce((acc, item) => {
//       acc += item * tempIndex;
//       tempIndex++;
//       if (tempIndex > nums.length - 1) {
//         tempIndex = 0;
//       }
//       return acc;
//     }, 0);

//     arr.push(iterationMax);
//   }

//   return Math.max(...arr);
// };

maxRotateFunction([4, 3, 2, 6]); // 26
