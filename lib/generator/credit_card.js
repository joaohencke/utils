const { reverse } = require('../string');
const random = require('./random').number;

const prefixes = {
  visa: ['4539', '4556', '4916', '4532', '4929', '40240071', '4485', '4716', '4'],
  master: ['51', '52', '53', '54', '55'],
  amex: ['34', '37'],
  discover: ['6011'],
  diners: ['300', '301', '302', '303', '36', '38'],
  enRoute: ['2014', '2149'],
  jcb: ['35'],
  voyager: ['8699'],
};

function Schema(_prefixes, digits) {
  this.prefixes = _prefixes;
  this.digits = digits;
}

const schemas = {
  Visa: new Schema(prefixes.visa, 16),
  MasterCard: new Schema(prefixes.master, 16),
  Amex: new Schema(prefixes.amex, 15),
  Diners: new Schema(prefixes.diners, 16),
  Discover: new Schema(prefixes.discover, 16),
  EnRoute: new Schema(prefixes.enRoute, 16),
  JCB: new Schema(prefixes.jcb, 16),
  Voyager: new Schema(prefixes.voyager, 16),
};

module.exports = (schema = 'Visa') => {
  if (!schemas[schema]) throw new Error(`Bad schema. Avaiables: ${Object.keys(schemas).join(', ')}.`);

  const _schema = schemas[schema];
  const prefix = _schema.prefixes[random(_schema.prefixes.length - 1)] || _schema.prefixes[0];
  let ccNumber = prefix;

  while (ccNumber.length < _schema.digits - 1) {
    ccNumber += Math.floor(random(10));
  }

  const reversed = reverse(ccNumber);
  const reversedArray = reversed.split('').map(i => parseInt(i, 10));

  let sum = 0;
  let pos = 0;

  while (pos < _schema.digits - 1) {
    let odd = reversedArray[pos] * 2;
    if (odd > 9) odd -= 9;

    sum += odd;

    if (pos !== _schema.digits - 2) sum += reversedArray[pos + 1];

    pos += 2;
  }

  const digit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
  ccNumber += digit;

  return ccNumber;
};

module.exports.schemas = schemas;
