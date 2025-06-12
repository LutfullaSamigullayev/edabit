function isPalindrome(n) {
  // Your code here.
   // Sonni stringga o‘girib, teskari versiyasi bilan solishtiramiz
   return n.toString() === n.toString().split('').reverse().join('');
}

module.exports = isPalindrome;
