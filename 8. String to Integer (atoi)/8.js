/**
 * @param {string} s
 * @return {number}
 */
// const myAtoi = function (str) {
//   if (str.length < 0 || str.length > 200) return;

//   str = str.trim();

//   let addMinus = false;
//   let startIndex = 0;
//   if (str[0] === "-") {
//     startIndex = 1;
//     addMinus = true;
//     if (str.length === 1) {
//         return 0;
//       }
//   }
//   if (str[0] === "+") {
//     startIndex = 1;
//     if (str.length === 1) {
//       return 0;
//     }
//   }

//   let number = "";
//   //   clear number from start zeros
//   if (+str[startIndex] === 0) {
//     let strArr = str.split("");

//     for (let i = startIndex; i < strArr.length; i++) {
//       if (+str[i] !== 0) {
//         strArr = strArr.slice(i);
//         break;
//       }
//     }

//     str = strArr.join("");
//   }
//   console.log("🚀 ~ file: 8.js ~ line 39 ~ myAtoi ~ str", str)
//   for (let i = startIndex; i < str.length; i++) {
//     if (!Number(str[startIndex])) {
//       number = 0;
//       break;
//     }

//     if (Number(str[i]) || +str[i] === 0) {
//       number += str[i];
//     } else {
//       break;
//     }
//   }
//   console.log(number);

//   if (str.length === 1) {
//     number = str;
//   }

//   if (addMinus) {
//     number = -number;
//   }

//   if (number < Math.pow(-2, 31)) {
//     number = -2147483648;
//   }
//   if (number > Math.pow(2, 31) - 3) {
//     number = 2147483647;
//   }
//   return +number;
// };

// myAtoi("     +004500");
