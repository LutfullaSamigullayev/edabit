function canBuild(arr) {
  // Your code here.
  let str = '' // bu yerga taqqoslanadigan so'zni saqlab boramiz
  return arr.every((word, index) => { // arr ni every qilib tekshirami
    if(index === 0) { // agar index 0 ga teng bo'lsa
      str = word // word ni str ga o'zlashtiramiz
      return true // va true qaytaramiz
    } else if(str === word.slice(1) || str === word.slice(0, word.length - 1)) {
      // agar word ning oxiridan yoki boshidan 1 harfni olib tashlaganda str ga teng bo'lsa
      str = word // word ni str ga o'zlashtiramiz
      return true // va true ni return qilamiz
    } else return false // aks holda false ni return qilib 
  }) // shu yerda ishni yakunlaymiz
}

module.exports = canBuild;
