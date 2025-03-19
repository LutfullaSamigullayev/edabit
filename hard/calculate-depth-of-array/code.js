function depth(arr) {
  // Your code here.
  // Agar arr array bo‘lmasa (ya'ni oddiy element bo‘lsa), 0 qaytaramiz.
  // Bu bazaviy holat (base case) bo‘lib, rekursiyani to‘xtatish uchun kerak.
  if (!Array.isArray(arr)) return 0; 

  // Har bir ichki element uchun rekursiv tarzda depth() funksiyasini chaqiramiz.
  // .map(depth) orqali har bir elementning chuqurligini hisoblaymiz.
  // Agar element array bo‘lsa, uning ichidagi elementlarni tekshirib boramiz.

  return 1 + Math.max(0, ...arr.map(depth)); 
  // Math.max() orqali ichki arraylar ichidagi eng katta chuqurlikni topamiz.
  // 1 + ... degani - har bir ichki arrayni 1 ta qavat (layer) deb hisoblab qo‘shib boramiz.
}

console.log(depth([1, [2, 3, 4]]))
module.exports = depth;
