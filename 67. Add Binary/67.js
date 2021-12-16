/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.split("");
  b = b.split("");
  let len = a.length;
  if (a.length !== b.length) {
    if (a.length > b.length) {
      len = a.length;
      while (b.length !== a.length) {
        b.unshift("0");
      }
    } else {
      len = b.length;
      while (a.length !== b.length) {
        a.unshift("0");
      }
    }
  }

  let res = [];
  let addToNext = false;

  for (let i = len - 1; i >= 0; i--) {
    if (!b[i]) {
      res[i] = a[i];
      continue;
    }
    if (!a[i]) {
      res[i] = b[i];
      continue;
    }

    res[i] = sum(a[i], b[i], addToNext);

    if (i === 0 && addToNext) {
        res.unshift("1")
    }
  }

  function sum(one, two, prevAddToNext) {
    if (one === "1" && two === "1") {
      addToNext = true;
      if (prevAddToNext) {
        return "1";
      } else {
        return "0";
      }
    } else if (one === "0" && two === "0") {
      addToNext = false;
      if (prevAddToNext) {
        return "1";
      } else {
        return "0";
      }
    } else {
      if (prevAddToNext) {
        addToNext = true;
        return "0";
      } else {
        addToNext = false;
        return "1";
      }
    }
  }

  console.log('res', res);

  return res.join('');
};

// addBinary("1001010", "1011"); // 1010101
// addBinary("11", "1"); // 100
addBinary("1010", "1011"); // 10101
