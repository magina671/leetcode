/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("").filter((i) => i !== " ");

  let resultArr = arr.reduce((acc, item) => {
    const accCopy = [...acc];
    const lastElem = accCopy.pop();

    switch (item) {
      case "{":
      case "(":
      case "[":
        acc.push(item);
        break;

      case "}":
        if (lastElem === "{") {
          acc.pop();
        } else {
          acc.push(item);
        }
        break;
      case ")":
        if (lastElem === "(") {
          acc.pop();
        } else {
          acc.push(item);
        }
        break;
      case "]":
        if (lastElem === "[") {
          acc.pop();
        } else {
          acc.push(item);
        }
        break;
    }

    return acc;
  }, []);

  return resultArr.length === 0
};

isValid("");
