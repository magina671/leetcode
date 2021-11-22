/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let resultIndex = 0;

  console.log('j = ', nums.length - 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] !== val) {
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          resultIndex = i + 1;
          break;
        } 
      }
    } else {
        resultIndex = i + 1;
    }
  }

  console.log('nums', nums);
  console.log('resultIndex', resultIndex);

  return resultIndex;
};

removeElement([2], 2);
removeElement([3, 3, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([3, 2, 2, 3], 3);
removeElement([1, 1, 2], 2);
removeElement([4, 5], 4);
