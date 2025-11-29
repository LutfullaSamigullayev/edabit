function convertCartesian(x, y) {
  // Your code here.
  let result = [];
  // Natijaviy koordinatalarni saqlash uchun bo'sh massiv

  for (let i = 0; i < x.length; i++) {
    // Har bir indeks bo'yicha x va y ni juftlaymiz
    result.push([x[i], y[i]]);
  }

  // Hosil bo'lgan koordinatalar massivini qaytaramiz
  return result;
}

module.exports = convertCartesian;
