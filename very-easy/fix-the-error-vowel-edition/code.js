function removeVowels(str) {
  // Your code here.
  // Barcha unli harflarni global tarzda almashtiramiz
  return str.replace(/[aeiou]/g, "");
}

module.exports = removeVowels;
