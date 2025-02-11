function check(arr) {
  // Your code here.
  let increasing = true, decreasing = true;
  // Massivning o'suvchi yoki kamayuvchi ekanligini tekshirish uchun flaglar

  for (let i = 1; i < arr.length; i++) {
    // Massivning har bir elementini oldingi element bilan solishtirish
    if (arr[i] <= arr[i - 1]) increasing = false;
    // Agar joriy element oldingi elementdan kichik yoki teng bo'lsa, increasing flagini false ga o'zgartirish
    if (arr[i] >= arr[i - 1]) decreasing = false;
    // Agar joriy element oldingi elementdan katta yoki teng bo'lsa, decreasing flagini false ga o'zgartirish
  }

  if (increasing) return "increasing";
  // Agar increasing flagi true bo'lsa, "increasing" qaytarish
  if (decreasing) return "decreasing";
  // Agar decreasing flagi true bo'lsa, "decreasing" qaytarish
  return "neither";
  // Aks holda, "neither" qaytarish
}

module.exports = check;
