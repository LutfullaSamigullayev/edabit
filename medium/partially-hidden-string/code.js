function partiallyHide(phrase) {
  // Your code here.
  const arr = phrase.split(' ').map((word) => {  // So'zlarini ajratib olamiz.
    if (word.length > 2) { // Agar so'z uzunligi 2 dan katta bo'lsa.
      return word.slice(0, 1) + '-'.repeat(word.length - 2) + word.slice(-1);
      // So'zning bosh harfi va o'rtasiga uzunligi bo'yicha (-) belgini va oxirgi harfini qo'shib chiqamiz.
    } else {  // Aks holda.
      return word;   // So'zni o'zini qaytarib chiqamiz.
    }
  }); 
  return arr.join(' '); // So'zlarni qayta birlashtiramiz.
}

module.exports = partiallyHide;
