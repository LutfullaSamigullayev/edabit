function dataType(value) {
  // Funksiya berilgan qiymatning turini aniqlaydi va string sifatida qaytaradi

  if (Array.isArray(value)) return "array";
  // Agar qiymat massiv bo'lsa, "array" qaytarish

  if (value === null) return "null";
  // Agar qiymat null bo'lsa, "null" qaytarish

  if (value instanceof Date) return "date";
  // Agar qiymat Date obyekti bo'lsa, "date" qaytarish

  return typeof value;
  // Boshqa hollarda, typeof operatori orqali qiymatning turini qaytarish
}

module.exports = dataType;
