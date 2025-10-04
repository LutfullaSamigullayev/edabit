function last(a, n) {
  // Your code here.
  if (n > a.length) return "invalid";  // uzunlikdan katta bo'lsa
  if (n === 0) return [];                // agar n = 0 bo'lsa
  return a.slice(-n);                  // oxirgi n element
}

module.exports = last;
