function numberSyllables(word) {
  // Your code here.
  // "-" belgisi bo'yicha bo'lib, nechta qismga ajralganini sanaymiz
  return word.split("-").length;
}

module.exports = numberSyllables;
