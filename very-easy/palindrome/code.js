function checkPalindrome(str) {
  // Your code here.
  // str ni bo'laklarga ajratamiz,
  // keyin uni teskari tartibda qo'shamiz
  // va asl str bilan solishtiramiz
  return str.split('').reverse().join('') === str;
}

module.exports = checkPalindrome;
