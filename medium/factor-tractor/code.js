function primeFactorize(num) {
  // Your code here.
  if (num === 1) {
    return [];
  }

  const factors = [];

  // 2 ga bo'linishni tekshiramiz (tub sonlar orasida eng kichigi)
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  // Endi 3 dan boshlanib, n ning kvadrat ildizigacha bo'lgan barcha tub sonlarni tekshiramiz
  let divisor = 3;
  while (divisor * divisor <= num) {
    while (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    }
    divisor += 2; // Faqat toq sonlar bilan tekshiramiz (juftlarimizni o'tkazib yuboramiz)
  }

  // Agar n o'zi katta tub son bo'lsa, uni qo'shamiz
  if (num > 2) {
    factors.push(num);
  }

  return factors;
}

module.exports = primeFactorize;
