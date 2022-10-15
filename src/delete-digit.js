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
  var arr = String(n).split('')
  var max = 0
  for (let i = 0; i < arr.length; i++) {
    var newArr = arr.slice()
    newArr.splice(i,1)
    var number = Number(newArr.join(''))
    if (max < number) max =number
  }
  return max
}

module.exports = {
  deleteDigit
};
