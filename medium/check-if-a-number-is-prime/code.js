function isPrime(num) {
  // Your code here.
  if (num <= 1) {
    return false; // 1 va manfiy sonlar tub son emas
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        return false; // Agar son i ga bo'linadigan bo'lsa, tub son emas
    }
  }
  return true; // Agar hech bo'linuvchi topilmasa, tub sondir

}

module.exports = isPrime;
