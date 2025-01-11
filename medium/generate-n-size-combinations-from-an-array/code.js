function combo(arr, n) {
  // Your code here.
  arr.sort((a, b) => a - b);
  // Agar n = 0 bo'lsa, faqat bo'sh massiv qaytariladi
  if (n === 0) return [[]];
  
  // Agar n > massiv uzunligi bo'lsa, bo'sh massiv qaytariladi
  if (n > arr.length) return [];
  // Kombinatsiyalarni yaratish uchun yordamchi funktsiya
  const result = [];
  const generateCombinations = (start, currentCombo) => {
      // Agar joriy kombinatsiya n uzunlikka ega bo'lsa, natijaga qo'shish
      if (currentCombo.length === n) {
          result.push([...currentCombo]);
          return;
      }
      // Massivni aylanib chiqib, kombinatsiyalarni yaratish
      for (let i = start; i < arr.length; i++) {
          currentCombo.push(arr[i]);
          generateCombinations(i + 1, currentCombo);
          currentCombo.pop();
      }
  };
  // Kombinatsiyalarni yaratishni boshlash
  generateCombinations(0, []);
  
  return result;
}

module.exports = combo;
