function firstAndLast(s) {
  // Your code here.
  // Oldin s ni bo'laklarga bo'lib sortlab olamiz
  // va uni first ga saqlaymiz
  const first = s.split("").sort()
  
  // keyin hosil bo'lgan tartiblangan so'zni 
  // slice orqali nusxalab olamiz first o'zgarib ketmasligi uchun
  // uni reverse teskarisiga aylantirib last ga saqlaymiz
  const last = first.slice().reverse()
  
  // ularni join orqali birlashtirib string qilamiz
  return [first.join(''), last.join('')];
}

module.exports = firstAndLast;
