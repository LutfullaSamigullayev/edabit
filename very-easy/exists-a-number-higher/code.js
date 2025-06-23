function existsHigher(arr, n) {
  // Your code here.
  // Arraydagi har bir elementni tekshiramiz:
  // Agar hech bo‘lmaganda bittasi n dan katta yoki teng bo‘lsa => true
  return arr.some((num) => num >= n);
}

module.exports = existsHigher;
