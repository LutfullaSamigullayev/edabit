function chosenWine(wines) {
  // Your code here.
  // Agar wines massivi bo'sh bo'lsa, null qaytarish
  if (wines.length === 0) return undefined;
  
  // Agar wines massivida faqat bitta element bo'lsa, o'sha elementning nomini qaytarish
  if (wines.length === 1) return wines[0].name;

  // Wines massivini narx bo'yicha o'sish tartibida saralash
  const sorted = wines.sort((a, b) => a.price - b.price);
  
  // Saralangan massivning ikkinchi elementining nomini qaytarish
  return sorted[1].name;
}

module.exports = chosenWine;
