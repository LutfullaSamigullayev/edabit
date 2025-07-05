function lettersOnly(str) {
  // Your code here.
  // Faqat harflarni qoldirish uchun, harfdan boshqa barcha belgilarni olib tashlaymiz
  return str.replace(/[^a-z]/gi, '')
  // `/[^a-z]/gi` — harfdan tas hqari barcha belgilarni topadi (`^` - inkor),
  // `g` — global qidiruv (hamma joydan),
  // `i` — katta-kichik harfni farqlamaydi.
  // "" — topilgan belgilarni bo‘sh joy bilan almashtiradi (ya'ni olib tashlaydi).
}

module.exports = lettersOnly;
