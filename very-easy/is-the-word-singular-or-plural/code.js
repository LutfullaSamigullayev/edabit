function isPlural(word) {
  // Your code here.
  // word ning oxirgi harfini olib uni s bilan solishtiramiz
  return word[word.length - 1] === 's'
}

module.exports = isPlural;
