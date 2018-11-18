const { toString } = Object.prototype;

module.exports = (type, obj) => toString.call(obj) === `[object ${type.charAt(0).toUpperCase() + type.slice(1)}]`;
