function charCount(myChar, str) {
  // Your code here.
  let count = 0;
  // nechta moslik borligini sanash uchun o'zgaruvchi

  for (let i = 0; i < str.length; i++) {
    // stringni boshidan oxirigacha aylanamiz
    if (str[i] === myChar) {
      // agar belgi mos kelsa
      count++;
      // sanagichni bittaga oshiramiz
    }
  }

  // yakuniy natijani qaytaramiz
  return count;
}

module.exports = charCount;
