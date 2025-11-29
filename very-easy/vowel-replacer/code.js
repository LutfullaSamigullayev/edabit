function replaceVowels(str, ch) {
  // Your code here.
  // Unli harflarni aniqlash uchun regex ishlatamiz
  // a, e, i, o, u harflarini qidiramiz
  return str.replace(/[aeiou]/g, ch);
  // Topilgan barcha unli harflarni berilgan belgi bilan almashtiramiz
}

module.exports = replaceVowels;
