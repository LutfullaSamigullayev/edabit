function freeShipping(order) {
  // Your code here.
  const arr = Object.values(order); 
  // Bu funksiya obyektning faqat qiymatlarini massiv sifatida qaytaradi.
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  // reduce orqali massivni barcha elementlarini qo'shib chiqamiz.
  return sum > 50; // Agar sum 50 dan katta bo'lsa true qaytaradi.
}

module.exports = freeShipping;
