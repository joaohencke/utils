const randomNumber = require('./random').number;
const cnpjFormatter = require('../formatter').cnpj;

module.exports = mask => {
  const mod = (dividend, divisor) => Math.round(dividend - Math.floor(dividend / divisor) * divisor);
  const n = 8;

  const digits = [];

  for (let i = 0; i < n; i += 1) {
    digits.push(randomNumber(n + 1));
  }

  digits.push(...[0, 0, 0, 1]);

  let d1 =
    digits[11] * 2 +
    digits[10] * 3 +
    digits[9] * 4 +
    digits[8] * 5 +
    digits[7] * 6 +
    digits[6] * 7 +
    digits[5] * 8 +
    digits[4] * 9 +
    digits[3] * 2 +
    digits[2] * 3 +
    digits[1] * 4 +
    digits[0] * 5;
  d1 = 11 - mod(d1, 11);

  if (d1 >= 10) d1 = 0;

  let d2 =
    d1 * 2 +
    digits[11] * 3 +
    digits[10] * 4 +
    digits[9] * 5 +
    digits[8] * 6 +
    digits[7] * 7 +
    digits[6] * 8 +
    digits[5] * 9 +
    digits[4] * 2 +
    digits[3] * 3 +
    digits[2] * 4 +
    digits[1] * 5 +
    digits[0] * 6;
  d2 = 11 - mod(d2, 11);

  if (d2 >= 10) d2 = 0;

  const cnpj = digits.reduce((t, curr) => `${t}${curr}`, '').concat(`${d1}`, `${d2}`);

  if (mask) return cnpjFormatter(cnpj);
  return cnpj;
};

module.exports.formatter = cnpjFormatter;
