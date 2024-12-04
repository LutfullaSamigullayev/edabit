function percentDiff(num1, num2) {
  // Your code here.
  const res = Math.abs(num1 - num2)/((num1+num2)/2)*100 // Foizli farq formulasi
  if(Number.isInteger(res)){  // agar res butun son bo'lsa
    return res    // uning o'zini qaytaramiz
  } else return +res.toFixed(1) // aks holda uni bir onlik raqamgacha yaxtlitlaymiz
}

module.exports = percentDiff;
