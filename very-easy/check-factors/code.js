function checkFactors(factors, num) {
  // Your code here.
  // Har bir elementni tekshiramiz, agar num ga bo‘linmasa, false qaytaramiz
  return factors.every(factor => num % factor === 0);
}

module.exports = checkFactors;
