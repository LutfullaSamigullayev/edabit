function sameAscii(a, b) {
  // Your code here.
  function codeSumm(word) { 
    // belgilarning ASCII codi ni hisoblardigan funksiya
    let summ = 0 // summa ni hisoblash uchun o'zgaruvchi
    word.split('').forEach(str => summ += str.charCodeAt())
    // word ni bo'laklarga bo'lib forEach orqali har birini tekshiramiz
    // har bir element ni codini summ ga qo'shib chiqamiz
    return summ // va summ ni return qilamiz
  }
  return codeSumm(a) === codeSumm(b) // a va b larni tenglikini tekshiramiz
}

module.exports = sameAscii;
