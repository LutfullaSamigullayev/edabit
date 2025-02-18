function unique(arr) {
  // Your code here.
  let count = new Map();
  // Har bir sonni sanash uchun Map yaratamiz

  // 1. Har bir sonni sanash
  for (let num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
    // Agar son Mapda mavjud bo'lsa, qiymatini 1 ga oshiramiz
    // Agar son Mapda mavjud bo'lmasa, qiymatini 1 ga tenglashtiramiz
  }

  // 2. Faqat 1 marta uchragan sonni topish
  for (let [key, value] of count) {
    if (value === 1) return key;
    // Agar sonning qiymati 1 ga teng bo'lsa, o'sha sonni qaytarish
  }
}

module.exports = unique;
