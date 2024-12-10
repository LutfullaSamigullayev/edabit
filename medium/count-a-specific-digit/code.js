function digitOccurrences(min, max, digit) {
  // Your code here.
  let summ = 0 // bu yerga javob larni qo'shib boramiz
  let str = ''  // bu yerga raqamlarni yig'ib chiqamiz
  for(let num = min; num <= max; num++) { // min dan max gacha bo'lgan sonlarni
    str += Math.abs(num)  // str ga musbat son sifatida yig'ib boramiz
  } // keyin str ni split qilib bo'laklarga bo'lib forEach qilamiz 
  str.split('').forEach((num) => +num === digit ? summ++ : null) 
  return summ // agar num digit ga teng bo'lsa summ ni 1 ga oshirib boramiz 
} // keyin summ ni return qilamiz

module.exports = digitOccurrences;
