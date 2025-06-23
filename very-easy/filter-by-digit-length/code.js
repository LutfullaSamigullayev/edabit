function filterDigitLength(arr, num) {
  // Your code here.
  // Har bir sonni stringga aylantirib, uning uzunligini tekshiramiz
  return arr.filter(n => n.toString().length === num);
}

module.exports = filterDigitLength;
