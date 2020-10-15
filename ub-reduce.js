//Q - Find sum of numbers in array
const evenNumbers = Array.from({ length: 10 }).map((x, idx) => ++idx * 2);

//native implementation - existing es6 map function
const resultSum = evenNumbers.reduce((_o, acc) => acc + _o, 100);
console.log("Inbuilt -> ", resultSum);

//create own filter function  - ubReduce say
Array.prototype.ubReduce = function (callback, initialValue) {
  const _this = this; // refers
  let acc = initialValue;
  for (let i = 0; i < _this.length; i++) {
    if (acc) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};
const add = (a, b) => a + b;
var result = evenNumbers.ubReduce(add);
console.log("Hand made -> ", result);
