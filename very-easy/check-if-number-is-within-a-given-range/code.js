function isInRange(num, range) {
  // Your code here.
  // Sonning range.min va range.max oralig‘ida ekanligini tekshiramiz
  return num >= range.min && num <= range.max;
}

module.exports = isInRange;
