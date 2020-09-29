module.exports = function reverse (number) {
  return parseFloat(
      number.toString().
      split('').
      reverse().
      join('')
  )
};
