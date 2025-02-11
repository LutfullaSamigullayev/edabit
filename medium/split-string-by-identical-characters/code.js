function splitGroups(str) {
  // Your code here.
  let res = [] // bu yerga tayyor bo'lgan javoblarni push qilib boramiz
  let repeat = '' // bu yerga esa takrorlanuvchi elementlarni qo'shib boramiz
  for(let word of str) { 
    // str ni for qilib of orqali har bir elementini word ga o'zlashtirib tekshirib chiqamiz
    if(repeat.length === 0 || repeat[0] === word) {
      // agar res bo'sh bo'lsa yani 1-element bo'lsa yoki repeatning 1-elementi wordga teng bo'lsa
      repeat += word // word ni repeatga qo'shamiz
    } else { // aks holda u boshqa element bo'lsa
      res.push(repeat) // repeat ni res ga push qilib 
      repeat = '' // uni bo'shatib
      repeat += word // word ni repeatga qo'shamiz
    } 
  }
  if(repeat.length) { // agar for ishini yakunlaganidan keyin repeat bo'sh bo'lmasa
    res.push(repeat) // uni res ga push qilib yuboramiz
  }
  return res // va res ni return qilamiz
}

module.exports = splitGroups;
