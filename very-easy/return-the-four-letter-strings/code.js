function isFourLetters(arr) {
  // Your code here.
  // filter orqali har bir so'zning uzunligini tekshirib
  // 4 ga teng bo'lganlarni olamiz
  return arr.filter(word => word.length === 4); 
}

module.exports = isFourLetters;
