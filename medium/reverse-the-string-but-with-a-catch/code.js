function specialReverseString(str) {
  // Your code here.
  const arr = str.replaceAll(' ', '').split('')
  // str ni ichidagi probelni olib tashlab, split qilib bo'laklarga bo'lib arr ga yuboramiz
  let newarr = arr // arr ni newarr ga o'zlashtiramiz
  let res = '' // res ga javoblarni saqlab boramiz
  for(let i = 0; i < str.length; i++) { // str ni uzunligi bo'yicha for qilamiz
    if(str[i] !== ' ') { // agar str[i] probel bo'lmasa
      let word = newarr.pop() // newarr ni oxirgi elementini olib, word ga yuboramiz
      if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase() ) {
        // agar str[i] katta harf bo'lsa va str[i] kichik harf bo'lmasa
        res += word.toUpperCase() // word ni katta harf qilib res ga yuboramiz
      } else { // aks holda kichik harf qilib res ga yuboramiz
        res += word.toLowerCase()
      }
    } else { // aks holda probel qilib res ga yuboramiz
      res += ' '
    }
  }
  return res // res ni return qilib chiqaramiz
}

module.exports = specialReverseString;
