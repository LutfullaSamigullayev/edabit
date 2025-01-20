function isIsogram(str) {
  // Your code here.
  let letter = '' // bu yerga takrorlanmagan harflarni saqlab boramiz
  return str.split('').every((word, index) => { // strni split va every qilib tekshiramiz
    if (index === 0) {  // agar index = 0 bo'lsa letterga word ni qo'shib qo'yamiz
      letter += word.toLowerCase() // kichik harf qilib
      return true // true ni return qilamiz every yana ishini davom ettirishi uchun
    } else if(!letter.includes(word.toLowerCase())) {
      // aks holda word letter ni ichidan topilmasa uni ham letterga qo'shamiz
      letter += word.toLowerCase() // kichik harf qilib
      return true // true ni return qilamiz every yana ishini davom ettirishi uchun
    } else { // aks holda false ni return qilamiz va shu yerda ish yakunlanadi
      return false
    }
  }) // agar barchashi true bo'lsa javob ga true qaytadi
}

module.exports = isIsogram;
