/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const res = [""];
  const stack = [];
  let times = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!Number.isNaN(Number(char))) {
        times = 10 * times + Number(char)
    } else if (char === '[') {
        stack.push(times);
        res.push('');
        times = 0;
    } else if (char === ']') {
        const times = stack.pop();
        const subStr = res.pop();
        res[res.length - 1] += subStr.repeat(times);
    } else {
        res[res.length - 1] += char
    }
  }

  return res[0];
};

// decodeString("q1[a1[b1[c]b]a]q"); //qabcbaq
// decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"); // "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"
// decodeString("3[a2[c]]"); // accaccacc
// decodeString("2[abc]3[xy]ef"); //abcabcxyxyxyef
// decodeString("11[a]"); //aaaaaaaaaaa
