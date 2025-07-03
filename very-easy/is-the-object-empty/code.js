function isEmpty(obj) {
  // Your code here.
  // obj ichidagi elementlarni array ko'rinishiga keltiramiz
  // keyin uning uzunligini tekshiramiz agar ichi bo'sh bo'lsa true
  // aks holda false qaytaramiz
  return Object.keys(obj).length === 0
}

console.log(isEmpty({ a: 1 }))
module.exports = isEmpty;
