const randomNumber = require('./random').number;

module.exports = mask => {
  const mod = (dividend, divisor) => Math.round(dividend - Math.floor(dividend / divisor) * divisor);
  const n = 9;

  const digits = [];

  for (let i = 0; i < n; i += 1) {
    digits.push(randomNumber(n));
  }

  let d1 = digits.reduce((t, c, i) => t + c * (10 - i), 0);
  d1 = 11 - mod(d1, 11);
  if (d1 > 9) d1 = 0;

  let d2 = digits.reduce((t, c, i) => t + c * (11 - i), d1 * 2);
  d2 = 11 - mod(d2, 11);
  if (d2 > 9) d2 = 0;

  const cpf = digits.reduce((t, curr) => `${t}${curr}`, '').concat(`${d1}`, `${d2}`);

  if (mask) return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  return cpf;
};
