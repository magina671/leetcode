/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  let isGo = true;
  let isAddOne = false;
  while (isGo) {
    if (digits[i] === 9) {
      isAddOne = true;
      digits[i] = 0;
    } else {
      digits[i] += 1;
      isGo = false;
      isAddOne = false;
    }

    if (i <= 0) {
      if (isAddOne) digits.unshift(1);

      isGo = false;
    }

    i--;
  }

  return digits;
};

plusOne([1, 2, 3]); // 1, 2, 4
plusOne([0]); // 1
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
plusOne([9]); // 1, 0
plusOne([9, 9, 9]); // 1, 0, 0, 0
