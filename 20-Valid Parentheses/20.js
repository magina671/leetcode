/**
 * @param {string} s
 * @return {boolean}
 */

const _closeBrackets = {
  "}": "{",
  "]": "[",
  ")": "(",
};

var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    if (isCloseBracket(cur)) {
      if (_closeBrackets[cur] !== stack.pop()) return false;
    } else {
      stack.push(cur);
    }
  }

  return stack.length === 0;
};

function isCloseBracket(char) {
  return Object.keys(_closeBrackets).indexOf(char) > -1;
}

// var isValid = function (s) {
//   const arr = s.split("").filter((i) => i !== " ");

//   let resultArr = arr.reduce((acc, item) => {
//     const accCopy = [...acc];
//     const lastElem = accCopy.pop();

//     switch (item) {
//       case "{":
//       case "(":
//       case "[":
//         acc.push(item);
//         break;

//       case "}":
//         if (lastElem === "{") {
//           acc.pop();
//         } else {
//           acc.push(item);
//         }
//         break;
//       case ")":
//         if (lastElem === "(") {
//           acc.pop();
//         } else {
//           acc.push(item);
//         }
//         break;
//       case "]":
//         if (lastElem === "[") {
//           acc.pop();
//         } else {
//           acc.push(item);
//         }
//         break;
//     }

//     return acc;
//   }, []);

//   return resultArr.length === 0
// };

isValid("{[[]()]}()()");
