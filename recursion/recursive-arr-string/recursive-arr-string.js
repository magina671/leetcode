const arr = ["aaa", ["bbb"], [["ccc"]], [[["ddd"]]], ["f", [[[[[["zzz"]]]]]]]];

const recursiveArr = (arr) => {
  if (typeof arr === "string") {
    return arr;
  } else {
    return recursiveArr(...arr);
  }
};

function recursiveStrings(arr) {
  const result = arr.reduce((acc, item) => {
    if (typeof item === "string") {
      return [...acc, item];
    } else {
      let temp = [];
      item.forEach((i) => {
        temp = [...temp, recursiveArr(i)];
      });
      return [...acc, ...temp];
    }
  }, []);

  return result;
}

recursiveStrings(arr);
