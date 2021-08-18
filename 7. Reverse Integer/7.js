/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const answer = x >= 0 ? Number(String(x).split('').reverse().join('')) : Number('-' + String(x).split('').slice(1).reverse().join(''));

  if (answer >= Math.pow(2, 31) - 1 || answer <= -Math.pow(2, 31)) {
    return 0;
  }

  return answer;
};
