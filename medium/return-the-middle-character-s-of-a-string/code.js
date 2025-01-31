function getMiddle(str) {
  // Your code here.
  const leng = str.length // str ning uzunligini olamiz
  if(leng === 1) { // agar uzunlik 1 bo'lsa
    return str // str ni o'zini return qilamiz 
  } 
  const leng2 = leng/2 // uzunligini 2 ga bo'lib o'rtasini topamiz
  if(leng % 2 === 0) { // agar uzunlik juft son bo'lsa
    return str.slice(leng2 - 1, leng2 + 1) 
    // o'rtadagi 2 ta harfni qaytarib beramiz
  } else { // aks holda
    return str.slice(leng2, leng2 + 1)
  } // o'rtadagi 1 ta harfni qaytarib beramiz
}

module.exports = getMiddle;
