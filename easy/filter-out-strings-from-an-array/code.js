function filterArray(arr) {
  // Your code here.
   // Faqat number tipidagi elementlarni qaytaradi
   return arr.filter(item => typeof item === "number");
}

module.exports = filterArray;
