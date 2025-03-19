function carryDigits(n1, n2) {
  // Your code here.
  let arr1 = n1.toString().split('') // n1 ni string qilib bo'laklarga bo'lamiz
  let arr2 = n2.toString().split('') // n2 ni string qilib bo'laklarga bo'lamiz

  // bu funksiya orqali raqamlarni qo'shamiz
  function increment(num1, num2) {
    let count = 0 // bu yerga necha marta raqam olib o'tganimizni hisoblab boramiz
    let quenty = 0 // bu yerga qoldiqni joylab boramiz
    // let res = [] // bu yerga yig'indini qo'shib boramiz
    for(let i = num1.length; i >= 0; i--) { // num1 ning uzunligi bo'yicha for qilamiz
      let summ = Number(num1.pop()) + Number(num2.pop()) + quenty
      // num1 ning oxirgi va num2 ning ozirgi raqamini va qoldiqni qo'shamiz
      quenty = 0 // va qoldiqni yana 0 qilib qo'yamiz
      if(summ >= 10) { // agar summ 10 ga teng yoki undan katta bo'lsa
        count ++ // count ni 1 ga oshiramiz
        quenty ++ // quenty ga 10 ning 1 raqamini saqlaymiz
        // res.push(summ - 10) // summ ni res ga push qilamiz
      } else { // aks holda summ 10 dan kichik bo'lsa
        // res.push(summ) // summ ni res ga push qilamiz
      }
    } // bu funksiyamiz count ni return qiladi
    return count
  }

  if(arr1.length > arr2.length) {
    // agar arr1 ning uzunligi arr2 ning uzunligidan katta bo'lsa
    return increment(arr2, arr1) // funksiyaga arr2 ni birinchi qilib beramiz
  } else { // aks holda
    return increment(arr1, arr2) // funksiyaga arr1 ni birinchi qilib beramiz
  }
}

module.exports = carryDigits;
