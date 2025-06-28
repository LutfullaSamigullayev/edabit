function countdown(start) {
  // Your code here.
  // Natija uchun bo'sh array yaratamiz
   const result = [];

   // num dan 0 gacha kamayib boramiz
   for (let i = start; i >= 0; i--) {
     result.push(i); // Har bir sonni arrayga qo‘shamiz
   }
 
   return result;
}

module.exports = countdown;
