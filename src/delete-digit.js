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
  const number = String(n);
  const allPossibleNumbers = [];
  
  for (let digit of number) {
    allPossibleNumbers.push(+number.replace(digit, ''))
  }

  return Math.max(...allPossibleNumbers);
}

module.exports = {
  deleteDigit
};
