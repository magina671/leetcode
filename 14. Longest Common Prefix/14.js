/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const strsLength = strs.length;
  if (strsLength < 1 || strsLength > 200) return;

  let prefix = strs[0];

  for (let i = 1; i < strsLength; i++) {
    const currentWord = strs[i];
    const shortest = currentWord.length < prefix ? currentWord : prefix;
    let tempPrefix = ''
    for (let i = 0; i < shortest.length; i++) {
        if (prefix[i] === currentWord[i]) {
            tempPrefix += currentWord[i]
        } else break;
    }
    prefix = tempPrefix;
  }
  console.log(prefix);

  return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
