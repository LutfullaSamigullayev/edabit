function firstBeforeSecond(s, first, second) {
  // Your code here.
  let firstIndex = 0  // bu yerda birinchi berilgan harfni index ni saqlaymiz
  let secondIndex = 0 // bu yerda ikkinchi berilgan harfni index ni saqlaymiz
  s.split('').forEach((word, index) => {
    // keyin s ni split qilib bo'laklarga bo'lib forEach qilamiz
    if(word === first) {  
      // agar kelgan harf first ga teng bo'lsa
      firstIndex = index  
    } // uning indexni firstIndexga o'zlashtiramiz
    if(word === second && secondIndex === 0) {
      // agar kelgan harf second ga teng bo'lsa va
      // u hali birinchi marta uchrashi bo'lsa
      secondIndex = index
    } // uning indexni secondIndexga o'zlashtiramiz
  }) 
  return firstIndex < secondIndex
}

module.exports = firstBeforeSecond;
