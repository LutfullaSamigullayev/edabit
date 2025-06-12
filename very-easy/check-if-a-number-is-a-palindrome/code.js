function isPalindrome(n) {
  // Your code here.
   // Sonni stringga o‘girib, teskari versiyasi bilan solishtiramiz
   return num.toString() === num.toString().split('').reverse().join('');
}

module.exports = isPalindrome;
