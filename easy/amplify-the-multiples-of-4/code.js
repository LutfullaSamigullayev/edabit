function amplify(num) {
  // Your code here.
  let result = [];
  // Natijalarni saqlash uchun bo'sh massiv yaratamiz

  for (let i = 1; i <= num; i++) {
    // 1 dan berilgan songacha aylanamiz
    if (i % 4 === 0) {
      // Agar son 4 ga qoldiqsiz bo'linsa
      result.push(i * 10);
      // Sonni 10 ga ko'paytirib qo'shamiz
    } else {
      // Aks holda
      result.push(i);
      // Sonning o'zini qo'shamiz
    }
  }

  // Yakuniy massivni return qilamiz
  return result;
}

module.exports = amplify;
