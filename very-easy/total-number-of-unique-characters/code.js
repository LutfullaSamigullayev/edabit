function countUnique(s1, s2) {
  // Your code here.
  // Ikki stringni birlashtiramiz
  const combined = s1 + s2;

  // Set yordamida faqat noyob belgilarni olamiz
  const uniqueChars = new Set(combined);

  // Set uzunligi noyob belgilar soni bo'ladi
  return uniqueChars.size;
}

module.exports = countUnique;
