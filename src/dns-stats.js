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
  if (!domains.length) {
    return {};
  }

  const result = {};

  domains.forEach((domain) => {
    const localDomain = '.' + domain.split('.').reverse().join('.'),
      length = localDomain.length;

    for (let index = 1; index <= length; index++) {
      if (localDomain[index] !== '.' && localDomain[index]) {
        continue;
      }

      const subDomain = localDomain.slice(0, index);

      if (result.hasOwnProperty(subDomain)) {
        result[subDomain]++;
      } else {
        result[subDomain] = 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats
};
