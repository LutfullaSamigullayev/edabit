function firstNVowels(s, n) {
  // Your code here.
  const vowels = 'aeiou' // bu yerga unli harflarni saqlab qo'yamiz
  let res = ''  // bu yerda esa matn dan chiqgan unli harflarni saqlab boramiz
  s.split('').every(word => { // keyin s ni split va every qilib tekshirib chiqamiz
    if(vowels.includes(word)) { // agar kelgan so'z vowels ni ichida bo'lsa 
      res += word // demak u unli harf shuning uchun uni res ga qo'shamiz
    } // bu hol res ning uzunligi n ga teng bo'lgunicha davom etadi 
    return res.length != n  // agar yetarli harf topilsa shu yerda ish to'xtaydi
  })  // agar res ning uzunligi n ga teng bo'lsa res ni aks holda invalid deb chiqaramiz
  return res.length === n ? res : "invalid"
}

module.exports = firstNVowels;
