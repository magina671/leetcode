/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  }
  if (nums.length === 1) {
    nums[0] = nums[0].toString();
    return [...nums];
  }

  let res = [];
  let temp = [];

  function convertTempToStr(arr) {
    if (arr.length > 1) {
      return `${arr[0]}->${arr[arr.length - 1]}`;
    } else {
      return arr[0].toString();
    }
  }

  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    if (i === nums.length - 1) {
      res.push(convertTempToStr(temp));
      continue;
    }

    if (nums[i + 1] === nums[i] + 1) {
      temp.push(nums[i + 1]);
    } else {
      res.push(convertTempToStr(temp));
      temp = [];
    }
  }

  return res;
};

summaryRanges([0, 2, 3, 4, 6, 8, 9]); //["0","2->4","6","8->9"]
summaryRanges([0, 2, 3, 4, 6, 7, 9]); //["0","2->4","6->7","9"]
