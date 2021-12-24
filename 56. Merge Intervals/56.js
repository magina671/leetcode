/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  let current = res[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      current = next;
      res.push(current);
    }
  }

  console.log("res", ...res);

  return res;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]); // [[1,6], [8,10], [15,18]]

merge([
  [1, 4],
  [4, 5],
]); // [[1,5]]

merge([
  [1, 3],
  [4, 6],
  [8, 10],
  [10, 18],
]); // [[1,3], [4,6], [8,18]]

merge([
  [1, 4],
  [0, 4],
]); // [[0,4]]

merge([
  [1, 4],
  [0, 0],
]); // [[0,0],[1,4]]

merge([
  [1, 4],
  [0, 2],
  [3, 5],
]); //[[0,5]]
