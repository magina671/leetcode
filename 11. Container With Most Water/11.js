/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  console.log(height);
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let max = 0;
  while (leftIndex < rightIndex) {
    const width = rightIndex - leftIndex;
    const size = width * Math.min(height[rightIndex], height[leftIndex]);
    max = Math.max(max, size);

    if (height[leftIndex] <= height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return max;
};

maxArea([1, 12, 3, 4, 5, 13, 6, 9, 10, 8, 14, 7, 12]); // 132
