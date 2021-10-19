/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) {
    return 0;
  } else if (divisor === 1) {
    return dividend;
  } else if (divisor === -1) {
    if (dividend === -2147483648) {
      return 2147483647
    }
    return -dividend;
  }

  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  let dd = Math.abs(dividend);
  let dv = Math.abs(divisor);

  let result = 0;
  let i = 1;
  let tmp = dv;

  while (dd >= dv) {
    i = 1;
    tmp = dv;

    while (tmp <= (dd >> 1)) {  // !important dd >> 1, it stops tmp to be bigger that dividend and give maximal i
      tmp = tmp << 1;
      i = i << 1;
    }

    dd = dd - tmp;
    result += i;
  }

  if (sign === -1) {
    result = -result;
  }

  return Math.min(2147483647, Math.max(result, -2147483648));
};

divide(55, 3); // 18
divide(10, 2); // 5
divide(10, 3); // 3
divide(7, -3); // -2
divide(-7, 3); // -2
divide(-7, -3); // 2
divide(-2147483648, 1); // -2147483648    log will not show
divide(-2147483648, -1); // 2147483647    log will not show
divide(2147483648, 1); // 2147483647      log will not show
divide(2147483648, -1); // -2147483648    log will not show
divide(-2147483648, 2); // -2147483648
