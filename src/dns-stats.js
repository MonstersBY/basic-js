const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  var obj = {}
  for (let i = 0; i < domains.length; i++) {
    var newArr = domains[i].split('.')
    var str = ''
    for (let j = newArr.length-1; j > -1; j--) {
      str += "."+newArr[j]
      if (obj[str]){
        obj[str] +=1
      } else obj[str] =1
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
