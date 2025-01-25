function probability(arr, num) {
  // Your code here.
  let count = 0 // bu yerda numdan katta yoki teng elementlar sonini saqlaymiz
  arr.forEach(e => e >= num && count ++ ) 
  // arr ning har bir elementini tekshiramiz agar numdan katta yoki teng bo'lsa count ni oshiramiz
  let res = count / arr.length * 100 
  // natijani topish uchun count ni arr ning uzunligiga bo'lib 100 ga ko'paytiramiz
  if(res - Math.trunc(res)) { // agar res ning kasr qismi bo'lsa
    res = res.toFixed(1) // kasr qismi 1 ga teng bo'lishi uchun toFixed(1) qo'shamiz
  }
  return Number(res) // natijani numberga o'tkazib qaytaramiz
}

module.exports = probability;
