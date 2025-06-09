function isBetween(first, last, word) {
  // Your code here.
  // Berilgan uchta so‘zni alfavit bo‘yicha tartibga solamiz
  const res = [first, last, word].sort();
  // Agar 'word' alfavit bo‘yicha o‘rtada turgan bo‘lsa, true qaytariladi
  return res[1] === word;
}

module.exports = isBetween;
