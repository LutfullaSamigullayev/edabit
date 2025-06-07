function additiveInverse(arr) {
  // Your code here.
  return arr.map(num => num > 0 ? num * (-1) : Math.abs(num))
  // arr ni map qilib har bir kelgan sonni tekshiramiz 
  // agar u 0 dan katta bo'lsa uni -1 ga ko'paytiramiz
  // aks holda uni musbat son qilamiz 
  // va javoblarni massiv ko'rinishida return qilamiz
}

module.exports = additiveInverse;
