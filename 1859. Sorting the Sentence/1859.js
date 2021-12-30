/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(" ");

  const numsReg = new RegExp("[\\d]+");
  const charsReg = new RegExp("[\\D]+");

  const wordsOrders = words.map((item) => {
    const itemNum = numsReg.exec(item);
    const itemText = charsReg.exec(item);
    return {
      index: itemNum[0],
      text: itemText[0],
    };
  });

  wordsOrders.sort((a, b) => {
    return a.index - b.index;
  });

  const sortedWords = wordsOrders.map(item => item.text)
  return sortedWords.join(' ')
};

sortSentence("Myself2 Me1 I4 and3");
sortSentence("is2 sentence4 This1 a3");
