function isIdentical(s) {
  // Your code here.
  // Har bir belgini birinchi belgi bilan solishtiramiz
  return s.split('').every(char => char === s[0]);
}

module.exports = isIdentical;
