  function pigLatin(str) {
  // Your code here.
  const vowel = 'aeiou';
  // Unli harflar ro'yxati

  const res = str.split(' ').map((word, index, arr) => {
    // Berilgan stringni so'zlarga bo'lib, har bir so'zni Pig Latin tiliga tarjima qilish

    let letter = word[0].toLowerCase();
    // So'zning birinchi harfini olish va kichik harfga aylantirish

    let start = '';
    let end = '';
    // So'zning boshlanishi va oxiri uchun o'zgaruvchilar

    let findvowel = vowel.includes(letter);
    // So'zning birinchi harfi unli harf ekanligini tekshirish

    let endword = index + 1 === arr.length;
    // So'z oxirgi so'z ekanligini tekshirish

    if (arr.length === 1) {
      // Agar stringda faqat bitta so'z bo'lsa
      if (findvowel) {
        return word + 'way';
        // Agar so'z unli harf bilan boshlansa, so'zga 'way' qo'shib qaytarish
      } else {
        let upper = word[1].toUpperCase();
        // So'zning ikkinchi harfini katta harfga aylantirish
        start = word.slice(2, word.length - 1);
        // So'zning uchinchi harfidan oxirgi harfigacha bo'lgan qismini olish
        end = word.slice(-1);
        // So'zning oxirgi harfini olish
        return upper + start + letter + 'ay' + end;
        // Yangi so'zni qaytarish: ikkinchi harf katta harf, qolgan qism, birinchi harf va 'ay', oxirgi harf
      }
    } else if (!index) {
      // Agar so'z birinchi so'z bo'lsa
      if (findvowel) {
        return word + 'way';
        // Agar so'z unli harf bilan boshlansa, so'zga 'way' qo'shib qaytarish
      } else {
        let upper = word[1].toUpperCase();
        // So'zning ikkinchi harfini katta harfga aylantirish
        start = word.slice(2);
        // So'zning uchinchi harfidan boshlab qolgan qismini olish
        return upper + start + letter + 'ay';
        // Yangi so'zni qaytarish: ikkinchi harf katta harf, qolgan qism, birinchi harf va 'ay'
      }
    } else if (endword) {
      // Agar so'z oxirgi so'z bo'lsa
      if (findvowel) {
        start = word.slice(0, word.length - 1);
        // So'zning boshidan oxirgi harfigacha bo'lgan qismini olish
        end = word.slice(-1);
        // So'zning oxirgi harfini olish
        return start + 'way' + end;
        // Yangi so'zni qaytarish: boshidan oxirgi harfigacha bo'lgan qism, 'way', oxirgi harf
      } else {
        start = word.slice(1, word.length - 1);
        // So'zning ikkinchi harfidan oxirgi harfigacha bo'lgan qismini olish
        end = word.slice(-1);
        // So'zning oxirgi harfini olish
        return start + letter + 'ay' + end;
        // Yangi so'zni qaytarish: ikkinchi harf, qolgan qism, birinchi harf va 'ay', oxirgi harf
      }
    } else {
      // Agar so'z o'rtadagi so'z bo'lsa
      if (findvowel) {
        return word + 'way';
        // Agar so'z unli harf bilan boshlansa, so'zga 'way' qo'shib qaytarish
      } else {
        start = word.slice(1);
        // So'zning ikkinchi harfidan boshlab qolgan qismini olish
        return start + letter + 'ay';
        // Yangi so'zni qaytarish: ikkinchi harf, qolgan qism, birinchi harf va 'ay'
      }
    }
  });

  return res.join(' ');
  // Natijani bo'sh joy bilan birlashtirib qaytarish
}

module.exports = pigLatin;
