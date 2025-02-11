function splitCode(item) {
  // Your code here.
  let str = '' // bu yerga stringlarni saqlaymiz
  let num = '' // bu yerga numberlarni saqlaymiz
  for(let word of item) { 
    // item ni for qilamiz of orqali uning elementlarini wordga o'zlashtiramiz
    if(String(Number(word)) === "NaN"){ 
      // wordni number ga aylantiramiz va javobni string qilamiz,
      // agar word da string bo'lsa u raqamga aylanmaydi va NaN qaytaradi,
      // biz NaN === NaN deb tekshirib bilmaymiz u bizga false qaytaradi,
      // shuning uchun javobni string ga aylantiramiz agar u string bo'lsa 'NaN' qaytadi,
      // aks holda number bo'lsa o'sha raqam string ko'rinishida qaytadi: '5'.
      str += word // "NaN" === "NaN" true bo'lsa u string, uni str ga qo'shamiz
    } else { // aks ho'lda u number bo'lsa ozini holatida yani string ko'rinishida num ga qo'shamiz
      num += word // agar uni number shaklida qo'shsak u matematik amal bajarib yuboradi
    } 
  } // str ni string ko'rinishida, num ni + orqali Number ga aylantirib array shaklida return qilamiz
  return [str, +num]
}

module.exports = splitCode;
