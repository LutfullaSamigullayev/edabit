function isPrime(num) {
  // Your code here.
  if (num <= 1) return false; // 1 yoki 0 tub son emas
  if (num <= 3) return true; // 2 va 3 tub sonlar
  if (num % 2 === 0 || num % 3 === 0) return false; // 2 va 3 bilan bo'linmaslikni tekshirish

  // 5 dan kvadrat ildiziga qadar bo'lgan sonlar bilan bo'linmasligini tekshirish
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // Agar hech qaysi biriga bo'linmasa, tub son
}

module.exports = isPrime;
