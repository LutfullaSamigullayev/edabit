function smallest(digits, value) {
  // Your code here.
  // Eng kichik N xonali sonni aniqlash
  let start = Math.pow(10, digits - 1);
  // start dan katta yoki teng bo'lib, num ga bo'linadigan eng kichik sonni topish
  let result = Math.ceil(start / value) * value;
  return result;
}

console.log(smallest(5, 12));
module.exports = smallest;
