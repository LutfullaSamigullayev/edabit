function minMaxLengthAverage(arr) {
  // Your code here.
  // 1. Minimum qiymatni topish
  const min = Math.min(...arr);

  // 2. Maximum qiymatni topish
  const max = Math.max(...arr);

  // 3. Uzunlik (elementlar soni)
  const length = arr.length;

  // 4. O‘rtacha qiymatni hisoblash
  const average = arr.reduce((sum, num) => sum + num, 0) / length;

  // Natijani massiv ko‘rinishida qaytaramiz
  return [min, max, length, average];
}

module.exports = minMaxLengthAverage;
