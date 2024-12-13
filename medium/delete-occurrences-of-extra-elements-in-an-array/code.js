function deleteOccurrences(arr, num) {
  const counts = {};  // Elementlarning necha marta takrorlanganini saqlash uchun obyekt
  const result = [];  // Yangi massiv, faqat kerakli elementlarni saqlash uchun
  
  for (let elem of arr) {
      // Hozirgi elementning sonini oshiramiz
      counts[elem] = (counts[elem] || 0) + 1;
      // oldim object dan elem nomli kalit bo'lmasa yangi kalit ochiladi va uning qiyamti hali berilmagani uchun undifined bo'ladi va 0 qiymatni qabul qiladi va 1ga oshiradi aks holda oldin ochilgan bo'lsa oldingi qiymatini oladi va 1 ga oshiradi
      if (counts[elem] <= num) {
        result.push(elem);
        //  Agar bu element N martadan kam yoki teng bo'lsa, uni natija massiviga qo'shamiz
      }
  }
  
  return result; // Natijaviy massivni qaytarish
}

module.exports = deleteOccurrences;
