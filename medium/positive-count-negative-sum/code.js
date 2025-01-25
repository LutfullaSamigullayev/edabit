function countPosSumNeg(arr) {
  // Your code here.
  if(!arr || !arr.length) {  // agar arr bo'sh yoki yo'qligini tekshiramiz
    return [] // bo'sh massiv qaytaramiz
  }
  let count = 0 // bu yerda musbat elementlar sonini saqlaymiz
  let summ = 0 // bu yerda manfiy elementlar yig'indisini saqlaymiz
  arr.forEach(num => num > 0 ? count++ : summ += num)
  // arr ning har bir elementini tekshiramiz agar num musbat bo'lsa count ni oshamiz aks holda summ ga qo'shamiz
  return [count, summ] // musbat elementlar soni va manfiy elementlar yig'indisini qaytaramiz
}

module.exports = countPosSumNeg;
