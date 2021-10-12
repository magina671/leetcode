// const _sum3 = (x, y, z) => x + y + z;
// const _sum4 = (p, q, r, s) => p + q + r + s;

// function curry(fn) {
//     debugger
//   const N = fn.length;
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if(n <= 1) {
//         return fn(...args, a);
//       }
//      return innerFn(n - 1, [...args, a]);
//     }
//   }
//   return innerFn(N, [])
// }

// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);

// console.log(sum3(1)(3)(2)); // 6
// console.log(sum4(1)(3)(2)(4)); // 10

// !  =====================================
// const _sum3 = (x, y, z) => x + y + z;

// const curry = fn => {
//     const innerFn = (N, args) => {
//       return (...x) => {
//         if (N <= x.length) {
//           return fn(...args, ...x);
//         }
//         return innerFn(N - x.length, [...args, ...x]);
//       };
//     };

//     return innerFn(fn.length, []);
//   };

//   const sum3 = curry(_sum3);

//   sum3(2, 3)(4) //9
//   sum3(2)(3, 4) //9

// ! =====================================
// const infiniteCurry = fn => {
//   const next = (...args) => {
//     return x => {
//       if (!x) {
//         return args.reduce((acc, a) => {
//           return fn.call(fn, acc, a)
//         }, 0);
//       }
//       return next(...args, x);
//     };
//   };
//   return next();
// };

// const iSum = infiniteCurry((x, y) => x + y);
// console.log(iSum(1)(3)(4)(2)());

// ! =====================================
const infiniteCurry = (fn, seed) => {
  const reduceValue = (args, seedValue) =>
    args.reduce((acc, x) => {
      return fn.call(fn, acc, x);
    }, seedValue);

  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        console.log('%c final args','color:red;', args);
        return reduceValue(args, seed);
      }
      console.log('args', args);
      console.log('x', x);
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
};

const iSum = infiniteCurry((x, y) => x + y, 0);
const iMul = infiniteCurry((x, y) => x * y, 1);
console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)()); // 43
console.log(iMul(1)(3, 4)(5, 6)()); // 360
