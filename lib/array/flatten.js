module.exports = (arr = []) =>
  arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? module.exports(toFlatten) : toFlatten), []);
