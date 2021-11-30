/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n < 1 || n > 30) return;
  if (n === 1) return "1";

  let prevStr = "1";
  let iterator = 1;
  while (iterator < n) {
    iterator++;
    prevStr = sayNum(prevStr);
  }

  return prevStr;
};

function sayNum(n) {
  const arr = Array.from(n.toString());

  let symbol = arr[0];
  let currArr = [];
  let splittedStr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === symbol) {
      currArr.push(arr[i]);
    } else {
      splittedStr.push(currArr);
      symbol = arr[i];
      currArr = [arr[i]];
    }

    if (i === arr.length - 1) {
      splittedStr.push(currArr);
    }
  }

  const finalStr = splittedStr.reduce((str, item) => {
    return (str += String(item.length) + item[0]);
  }, "");

  return finalStr;
}


countAndSay(1) // 1
countAndSay(2) // 11
countAndSay(3) // 21
countAndSay(4) // 1211
countAndSay(5) // 111221
countAndSay(6) // 312211
countAndSay(7) // 13112221
countAndSay(8) // 1113213211
