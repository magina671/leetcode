/**
 * @param {number[]} nums
 * @return {number}
 */

// SORTING SOLUTION
var firstMissingPositive = function (nums, res) {
  const positiveNumbers = nums.filter((item) => item > 0);

  positiveNumbers.sort((a, b) => a - b);

  console.log("positiveNumbers", positiveNumbers);
  console.log("%c WAITING", "color: yellow", res);

  let target = 1;
  
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] === target) {
      target++;
    }
  }

  console.log("%c TARGET", "color: red", target);
  console.log("=================");
  return target;
};

firstMissingPositive([1, 2, 0], 3); // 3
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
