/**
 * @param {number[]} nums
 * @return {number}
 */

// FASTER SOLUTION
var firstMissingPositive = function (nums, res) {
 
};

// SORTING SOLUTION
// var firstMissingPositive = function (nums, res) {
//   const positiveNumbers = nums.filter((item) => item > 0);
//   positiveNumbers.sort((a, b) => a - b);
//   console.log("positiveNumbers", positiveNumbers);
//   console.log("%c WAITING", "color: yellow", res);

//   // [1, 1, 2]
//   let target = 1;
//   for (let i = 0; i < positiveNumbers.length; i++) {
//     if (positiveNumbers[i] === target) {
//       target++;
//     }
//   }

//   console.log("%c TARGET", "color: red", target);
//   console.log("=================");
//   return target;
// };

// firstMissingPositive([1, 2, 0], 3); // 3
firstMissingPositive([3, 4, -1, 1], 2); // 2
firstMissingPositive([7, 8, 9, 11, 12], 1); // 1
firstMissingPositive([-1, -1, 0, 4, 6, 7, 5], 1); // 1
firstMissingPositive([-1, -1, 1, 4, 6, 7, 5], 2); // 2
firstMissingPositive([-1, -1, 0, 2, 6, 7, 5], 1); // 1
firstMissingPositive([-1, -2, -3, 0, 1, 2, 3], 4); // 4
firstMissingPositive([1, 2, 3, 4, 6], 5); // 5
firstMissingPositive([1], 2); // 2
firstMissingPositive([-1], 1); // 1
firstMissingPositive([0], 1); // 1
firstMissingPositive([2], 1); // 1
firstMissingPositive([1, 0], 2); // 2
firstMissingPositive([-1, -2], 1); // 1
firstMissingPositive([1, 2], 3); // 3
firstMissingPositive([1, 3], 2); // 2
firstMissingPositive([0, 2], 1); // 1
firstMissingPositive([-1, -2, -60, 40, 43], 1); // 1
firstMissingPositive([0, 1, 1, 2, 2], 3); // 3

// var firstMissingPositive = function (nums) {
//   if (nums.length === 1) {
//     if (nums[0] === 1) {
//       console.log("%c RESULT IS => ", "color: orange", 2);
//       return 2;
//     }
//     console.log("%c RESULT IS => ", "color: brown", 1);
//     return 1;
//   }

//   nums.sort((a, b) => a - b);
//   console.log(
//     "nums",
//     nums,
//     nums.filter((item) => item > 0)
//   );

//   let startIndex = undefined;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0 && startIndex === undefined) {
//       startIndex = i;
//     } else if (i === nums.length - 1 && startIndex === undefined) {
//       startIndex = nums.length - 1;
//     }
//   }
//   let res = 1;

//   if (nums[startIndex] > 1 || nums[startIndex - 1] < 1) {
//     console.log("%c RESULT IS => ", "color: blue", 1);
//     return 1;
//   }

//   if (nums.length > 1) {
//     for (let i = startIndex; i < nums.length - 1; i++) {
//       if (nums[i] + 1 !== nums[i + 1]) {
//         console.log("%c RESULT IS => ", "color: yellow", nums[i] + 1);
//         return nums[i] + 1;
//       }
//       if (i === nums.length - 2 && nums[i] + 1 === nums[i + 1]) {
//         console.log("%c RESULT IS => ", "color: green", nums[i + 1] + 1);
//         return nums[i + 1] + 1;
//       }
//     }

//     for (let i = startIndex; i < nums.length; i++) {
//       if (nums[i] && !nums[i + 1]) {
//         if (nums[i] === 1) {
//           console.log("%c RESULT IS => ", "color: cyan", 2);
//           return 2;
//         }
//         console.log("%c RESULT IS => ", "color: purple", 1);
//         return 1;
//       }
//     }
//   }

//   return res;
// };
