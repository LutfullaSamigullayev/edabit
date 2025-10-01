function removeFirstLast(str) {
  // Your code here.
   // Agar uzunlik <= 2 bo‘lsa, o‘zini qaytaramiz
   if (str.length <= 2) return str;

   // Aks holda birinchi va oxirgi belgini olib tashlaymiz
   return str.slice(1, -1);
}

module.exports = removeFirstLast;
