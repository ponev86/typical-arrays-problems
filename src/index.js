
exports.min = function min (array) {
  if (!array || !array.length) return 0
  return array.reduce((min, item) => min = item <= min ? item : min, Infinity)
}

exports.max = function max (array) {
  if (!array || !array.length) return 0
  return array.reduce((max, item) => max= item >= max ? item : max, -Infinity)
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  return array.reduce((sum, item) => sum += item, 0) / array.length
}
