/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  function recursiveBinarySearch(arr, target, start, end) {
    if (start > end) {
      return start;
    }
    
    const middle = Math.floor((start + end) / 2);

    if (target === arr[middle]) {
      return middle;
    }

    if (arr[middle] > target) {
      return recursiveBinarySearch(nums, target, start, middle - 1);
    } else {
      return recursiveBinarySearch(nums, target, middle + 1, end);
    }
  }

    const res = recursiveBinarySearch(nums, target, 0, nums.length - 1);
    
    return res
};

searchInsert([1, 2, 4, 5, 7, 12, 34, 58, 100], 58); // 7
searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4
searchInsert([1, 3, 5, 6], 0); // 0
searchInsert([1], 0); // 0
searchInsert([1], 1); // 0
searchInsert([1, 3], 2); // 1
