function uniqueAbbrev(abbs, words) {
  // Har bir qisqartma uchun so'zlar massividan mos keladigan so'zlarni sanaymiz
  for (let abb of abbs) {
    let match_count = 0;
    
    for (let word of words) {
      // So'z qisqartma bilan boshlanadimi?
      if (word.startsWith(abb)) {
        match_count += 1;
      }
    }

    // Agar qisqartma bir nechta so'zni aniqlasa, noaniqlik bor
    if (match_count > 1) {
      return false;
    }
  }
  
  // Agar barcha qisqartmalar unikal bo'lsa
  return true;
}

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])); // true
console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])); // false

module.exports = uniqueAbbrev;
