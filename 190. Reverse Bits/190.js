/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if (n.length > 32) return;

  let reversedBinary = n.toString(2).split("").reverse();

  while (reversedBinary.length < 32) {
    reversedBinary.push("0");
  }

  return Number(parseInt(reversedBinary.join(""), 2));
};

reverseBits(00000010100101000001111010011100);
