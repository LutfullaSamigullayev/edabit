function isValidPhoneNumber(str) {
  // Your code here.
  let nums = '1234657890' // bu yerda raqamlarni tekshiramiz
  let bracket = "()"  // bu yerda qavslarni tekshiramiz
  return str.split('').every((num, index) => { // strni split qilib every qilib tekshiramiz
    if(bracket.includes(num) || index === 0 && index === 4) {
      return true // agar 0 yoki 4 index dagi element qavs bo'lsa true qaytaramiz
    } else if(index === 5 && num === ' ') {
      return true // agar 5 index dagi element bo'sh joy bo'lsa true qaytaramiz
    } else if(index === 9 && num ==='-') {
      return true // agar 9 index dagi element "-" bo'lsa true qaytaramiz
    } else if(nums.includes(num) && str.length === 14) {
      return true // qolgan elementlar raqam bo'lsa true qaytaramiz
    } else {  // va stning uzunligi 14 bo'lishi kerak
      return false // aks holda false qaytaramiz
    }
  })
}

module.exports = isValidPhoneNumber;
