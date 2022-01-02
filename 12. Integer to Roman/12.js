/**
 * @param {number} num
 * @return {string}
 */

// function numConverter(num) {
//   switch (num) {
//     case 1:
//       return "I";
//     case 4:
//       return "IV";
//     case 5:
//       return "V";
//     case 9:
//       return "IX";
//     case 10:
//       return "X";
//     case 40:
//       return "XL";
//     case 50:
//       return "L";
//     case 90:
//       return "XC";
//     case 100:
//       return "C";
//     case 400:
//       return "CD";
//     case 500:
//       return "D";
//     case 900:
//       return "CM";
//     case 1000:
//       return "M";
//     default:
//       return "";
//   }
// }

// const roman = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

const romanMatrix = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

var intToRoman = function (num) {
  function convertToRoman(num) {
    if (num === 0) {
      return "";
    }
    for (let i = 0; i < _romanMatrix.length; i++) {
      if (num >= _romanMatrix[i][0]) {
        return _romanMatrix[i][1] + convertToRoman(num - _romanMatrix[i][0]);
      }
    }
  }

  const res = convertToRoman(num);

  return res;
};

intToRoman("3"); // III
intToRoman("10"); // X
intToRoman("58"); // LVIII
intToRoman("90"); // XC
intToRoman("88"); // LXXXVIII
intToRoman("1994"); // MCMXCIV
intToRoman("2700"); // MMDCC
intToRoman("3994"); // MMMCMXCIV
