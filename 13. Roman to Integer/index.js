function charToInt(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

function romanToInt(str) {
    if (!str.length || str.length > 15) return;
    let num = charToInt(str[0])

    for (let i = 1; i < str.length; i++) {
        let pre = charToInt(str[i-1]);
        let cur = charToInt(str[i]);
        if (cur <= pre) {
            num += cur
        } else {
            num = num + cur - pre * 2;
        }
    }

    console.log(num);
    return num;
}

