function switchNotation(scores, desired_notation) {
  // Your code here.
  if(desired_notation === 'tally') { // agar tally kelsa
    return scores.map(num => { 
      // scores ni map qilib tally shaklga o'tkazib chiqamiz
      if(num > 5) { // num 5 dan katta bo'lsa
        let remainder = num % 5 // num ni 5 bo'lgandagi qoldiqni olamiz
        let repeat5 = (num - remainder) / 5 
        // va numdan qoldiqni olib tashlab 5 bo'lib 5 necha marta kelganligini aniqlaymiz
        let res = '5'.repeat(repeat5) // 5 ni string holatida shuncha marta repeat qilamiz
        if(remainder) { // agar qoldiq 0 ga teng bo'lmasa
          return Number(res + String(remainder)) 
          // uni string holatida res ga qoshib javobni Number shaklida return qilamiz
        } else { // aks holda 
          return Number(res) // res ni o'zini Number qilib return qilamiz
        } 
      } else { // agar num 5 dan kichik bo'lsa 
        return num // num ni o'zini return qilamiz
      }
    })
  } else { // agar tally emas normal kelgan bo'lsa
    return scores.map(num => {
      // scores ni map qilib tally shaklidan normal shakliga o'zgartirib chiqamiz
      if(num > 5) { // agar num 5 dan katta bo'lsa
        return String(num).split('').reduce((a, b) => a + Number(b), 0)
        // num ni String qilib bo'laklarga bo'lib reduce orqali qo'shib chiqamiz
        // va return qilamiz
      } else {  // agar num 5 dan kichik bo'lsa
        return num // num ni o'zini return qilamiz
      }
    })
  }
  
}

module.exports = switchNotation;
