function sumDigits(a, b) {
  // Your code here.
  let numbers = '' 
  // bu yerga raqamlar ketma-ketligini string ko'rinishida saqlaymiz
  for(let i = a; i <= b; i++) { // a dan b gacha for qilib chiqamiz
    numbers += i // va har bir kelgan raqamni numbers ga saqlab boramiz
  } // va split qilib arrayni reduce orqali qo'shib chiqamiz
  return numbers.split('').reduce((a, b) => a + Number(b), 0)
  // reduce barcha raqamlarni qo'shib number qaytaradi
}

module.exports = sumDigits;
