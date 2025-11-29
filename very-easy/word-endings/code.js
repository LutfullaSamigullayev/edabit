function addEnding(arr, ending) {
  // Your code here.
  let result = [];
  // Natijalarni saqlash uchun bo'sh massiv yaratamiz

  for (let i = 0; i < arr.length; i++) {
    // Massivni boshidan oxirigacha aylanamiz
    result.push(arr[i] + ending);
    // Har bir so'z oxiriga qo'shimchani qo'shamiz
  }

  // Yangi hosil bo'lgan massivni return qilamiz
  return result;
}

module.exports = addEnding;
