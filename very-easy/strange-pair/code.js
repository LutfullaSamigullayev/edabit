function isStrangePair(str1, str2) {
  // Your code here.
   // Agar ikkala string ham bo'sh bo'lsa — true
   if (str1 === "" && str2 === "") return true;

   // str1 ning birinchi va oxirgi harflarini olish
   const first1 = str1[0];
   const last1 = str1[str1.length - 1];
 
   // str2 ning birinchi va oxirgi harflarini olish
   const first2 = str2[0];
   const last2 = str2[str2.length - 1];
 
   // Strange pair shartlarini tekshirish
   return first1 === last2 && last1 === first2;
}

module.exports = isStrangePair;
