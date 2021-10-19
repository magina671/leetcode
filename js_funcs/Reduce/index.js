// const myReduce = (arr, cb, acc) => {
//   acc = acc ? acc : 0;

//   for (let i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }

//   console.log(acc);
//   return acc;
// };

// const someReduce = (acc, item) => {
//   return acc + item;
// };

// const someReduce2 = (acc, item) => {
//   return acc.concat(item);
// };

// myReduce([1, 2, 3, 4, 5], someReduce, 0);
// myReduce([ [1, 2], [3, 4], [5, 6] ], someReduce2, []);

//  ! ==================================================================

// function reduce(callback, initialVal) {
//   let accumulator = initialVal === undefined ? this[0] : initialVal;
//   let start = initialVal === undefined ? 1 : 0;
//   for (let i = start; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i]);
//   }
//   return accumulator;
// }

// Array.prototype.myReduce = reduce;

// // no init value
// console.log([1, 2, 3].myReduce((sum, curr) => sum + curr));

// init value:
// console.log([1, 2, 3].myReduce((sum, curr) => sum + curr, 1000));

//  ! ==================================================================
