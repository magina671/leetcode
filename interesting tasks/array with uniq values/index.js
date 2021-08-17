const array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9];

function removeDuplicates(arr) {
  const result = arr.filter((item, idx) => {
    const arr2 = arr;
    const uniq = arr2.every((i, idx2) => {
      if (idx === idx2) {
          return true;
      }
      return i !== item;
    });
    return uniq;
  });
  return result;
}

removeDuplicates(array);
