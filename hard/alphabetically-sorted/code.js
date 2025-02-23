function isAlphabeticallySorted(sentence) {
  // Your code here.
  let res = 0 // bu yerga alfavit bo'yicha yozilgan so'zni saqlaymiz
  let arr = sentence.split(' ') // matnni so'zlarga bo'lamiz
  arr.every((word) => { 
    // arr ni every qilib so'zni topguncha tekshirib chiqamiz
    if(word.length > 2) { // agar so'zning uzunligi 2 dan katta bo'lsa
      const tester = word.split('').every((e, i, letters) => {
        // uni harflarga bo'lib tekshirib chiqamiz
        if(i !== 0) { // 1-harflardan boshqalarini tekshiramiz
          const alphabet = e >= letters[i+1] 
          // hozirgi element o'zidan oldingi elementdan katta bo'lmasa
          if(!alphabet) return true 
          // alphabet false bo'ladi uni teskari qiymatini olib
          // true ni return qilamiz va ishni davom ettiramiz
          // aks holda false qaytadi va shu yerda every oz ishini to'xtatadi
        } else return true // agar i = 0 bo'lsa true ni return qiladi
      }) // shu yerda every o'z ishini yakunlaydi va javobni tester ga saqlaydi
      if(!tester) { // agar tester false bo'lsa uni true ga o'tkazamiz
        return true // true ni return qilamiz va keyingi so'zni tekshiramiz
      } else { // aks holda tester true bo'lsa uni false ga o'zgartiramiz va
        res++ // res ni 1ga oshiramiz va
        return false // false return qilamiz shunda every shu yerda o'z ishini yakunlaydi
      }
    }
    
    if(res === 0) { // agar res 0 ga teng bo'lsa 
      return true // true ni return qilamiz va yana keyingi so'zni tekshiramiz
    } else return false // aks holda res 1 ga teng bo'lsa false ni return qilamiz va
  }) // shu yerda every o'zishini yakunlaydi
  return res === 1 // agar res 1 ga teng bo'lsa true ni aks holda false ni return qilamiz
}

module.exports = isAlphabeticallySorted;
