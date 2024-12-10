function countAll(str) {
  // Your code here.
  const word = 'qwertyuiopasdfghjklzxcvbnm' // bu yerda barcha harflar
  const num = '1234567890'  // bu yerda barcha raqamlar bor
  let letter = 0  // bu yerga harflarni hisoblab boramiz
  let digit = 0   // bu yerga raqamlarni hisoblab boramiz
  str.toLowerCase().split('').forEach((element) => {
    // keyin str ni kichik harf qilib split qilib bo'laklarga bo'lib foreach qilamiz
    if(num.includes(element)) { // agar element num da bo'lsa
      digit++                   // digit ni 1 ga oshiramiz
    } else 
    if(word.includes(element)) { // agar element word da bo'lsa
      letter++                   // letter ni 1 ga oshiramiz
    } 
  }); // keyin javobni object qilib qaytaramiz
  return {"LETTERS": letter, "DIGITS": digit}
}

module.exports = countAll;
