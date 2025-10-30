function smallerNum(n1, n2) {
  // Your code here.
  // Avvalo, uzunlikni solishtiramiz — uzun son kattaroq bo'ladi
  if (n1.length < n2.length) return n1;
  if (n1.length > n2.length) return n2;

  // Agar uzunliklar teng bo'lsa, leksik tartibda solishtiramiz
  return n1 < n2 ? n1 : n2;
}

module.exports = smallerNum;
