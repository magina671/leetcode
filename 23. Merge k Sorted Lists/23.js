function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  if (!Array.isArray(lists)) {
    lists = [lists]
  }

  if (!lists?.length ) {
    return null;
  }
  const results = [];

  lists && lists.length && lists.map((item) => {
    function genListNodeArr(node) {
      results.push(node.val);
      if (!node.next) {
        return new ListNode(node.val);
      } else {
              return genListNodeArr(node.next);
      }
    }

    if (item != null) {
      genListNodeArr(item);
    }
  });

  results.sort((a, b) => a - b);

  // TAKE THIS FROM SOLUTION :(
  let newList = null;
  for (i = results.length - 1; i >= 0; i--) {
    newList = new ListNode(results[i], newList);
  }

  return newList;
};

mergeKLists([
  new ListNode(1, new ListNode(4, new ListNode(5, null))),
  new ListNode(1, new ListNode(3, new ListNode(4, null))),
  new ListNode(2, new ListNode(6, null)),
]);
mergeKLists([]);
mergeKLists([[]]);
mergeKLists( new ListNode(0, new ListNode(2, new ListNode(5, null))));