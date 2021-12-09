/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;

  k = k % len;

  nums.reverse();

  function revSubArray(start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start++;
      end--;
    }
  }

  revSubArray(0, k - 1);
  revSubArray(k, nums.length - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
