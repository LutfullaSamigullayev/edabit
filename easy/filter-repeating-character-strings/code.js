function identicalFilter(arr) {
  // Your code here.
  // Har bir satrdagi unikal belgilar sonini tekshiramiz
  return arr.filter(str => new Set(str).size === 1);
}

module.exports = identicalFilter;
