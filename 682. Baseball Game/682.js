/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const nums = [];

  ops.forEach((item) => {
    console.log(item);
    switch (item) {
      case "C":
        nums.pop();
        break;
      case "D":
        nums.push(nums[nums.length - 1] * 2);
        break;
      case "+":
        nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
        break;
      default:
        nums.push(Number(item));
        break;
    }
    console.log("nums", nums);
  });

  return nums.reduce((acc, item) => {
    return (acc += item);
  }, 0);
};

calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]); // 27
calPoints(["5", "2", "C", "D", "+"]); // 30
