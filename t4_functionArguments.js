"use strict";
//How to take arguments in sum function?
function sumAll(...args) {
  let arr = args.reduce((acc, currentValue) => {
    return (acc += currentValue);
  });
  return arr;
}
console.log(sumAll(5, 2, 3));
