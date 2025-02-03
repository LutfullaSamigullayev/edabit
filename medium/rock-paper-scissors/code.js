function calculateScore(games) {
  // Your code here.
  let Abigail = 0; // Abigail ning yutgan o'yinlari
  let Benson = 0; // Benson ning yutgan o'yinlari

  function calculate (arr) { // O'yinlarni hisoblash uchun funksiya
    if (arr[0] === arr[1]) { // Agar ikkala qiymat bir xil bo'lsa
      return; // durrang bo'ladi
    }
    if (arr[0] === 'R') { // Agar Abigail da R-(tosh) bo'lsa
      if (arr[1] === 'S') { // Benson da S-(qaychi) bo'lsa
        Abigail++; // Abigail yutadi, tosh qaychini yutadi
      } else { // aks holda Benson da P-(qog'oz) bo'lsa
        Benson++; //  Benson yutadi, qog'oz toshni yutadi
      }
    } else if (arr[0] === 'P') { // Agar Abigail da P-(qog'oz) bo'lsa
      if (arr[1] === 'R') { // Benson da R-(tosh) bo'lsa
        Abigail++; // Abigail yutadi, qog'oz toshni yutadi
      } else { // aks holda Benson da S-(qaychi) bo'lsa
        Benson++; // Benson yutadi, qaychi qog'ozni yutadi
      }
    } else {// Agar Abigail da S-(qaychi) bo'lsa
      if (arr[1] === 'P') { // Benson da P-(qog'oz) bo'lsa
        Abigail++; // Abigail yutadi, qaychi qog'ozni yutadi
      } else { // aks holda Benson da R-(tosh) bo'lsa
        Benson++; // Benson yutadi, tosh qaychini yutadi
      }
    }
  }
  games.forEach(calculate); // games ni forEach orqali funksiyani chaqiramiz
  if (Abigail === Benson) { // Agar Abigail va Benson ning yutgan o'yinlari bir xil bo'lsa
    return 'Tie'; // durang bo'ladi
  } // aks holda yutgan o'yinlarni solishtiramiz va qaysi ko'p bo'lsa shuni nomini chiqaramiz
  return Abigail > Benson ? 'Abigail' : 'Benson';
}

module.exports = calculateScore;
