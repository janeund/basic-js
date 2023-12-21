const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let arrayN = String(n).split("");
  for (let i = 0; i < arrayN.length; i++) {
    let arr = String(n).split("");
    arr.splice(i, 1);
    let number = arr.join("");
    number > result ? (result = arr.join("")) : result;
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
