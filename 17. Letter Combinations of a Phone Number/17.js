/**
 * @param {string} digits
 * @return {string[]}
 */

const table = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  let last = [""];

  for (let i = 0; i < digits.length; i++) {
    let newPos = [];

    for (let j = 0; j < last.length; j++) {
      console.log("last char", last[j]);
      for (let char of table[digits[i]]) {
        console.log("current adding char", char);
        newPos.push(last[j].concat(char));
      }
      console.log("=============");
    }

    last = newPos;
    console.log("last", last);
  }

  console.log("last", last);
  return last;
};

letterCombinations("279");
