function firstNonRepeatedCharacter(str) {
  // Your code here.
  
  if(str === '') { // agar str bosh bo'lsa
    return false  // false qaytaramiz
  } else if(str.length === 1) { // aks holda str 1 ta belgidan iborat bo'lsa
    return str  // o'sha belgining o'zini qaytaramiz
  }

  let letter = '' // bu yerga so'ngi ishlatilgan harflarni saqlab boramiz
  let findWord = '' // bu yerga esa topilgan harflarni saqlab boramiz

  const result = str.split('').every((word, index) => { 
    // keyin str ni bo'laklarga bo'lib every qilib tekshirib chiqamiz
    // every - fu sikl to false qaytmagungacha ishlayveradi 
    // agar false qaytsa o'sha yerda ishini tugatadi
    letter = word // kelgan wordni letterga o'zlashtirib qo'yamiz
    if(findWord.includes(word)) { // agar word findWord ni ichida bo'lsa
      return true // true qaytaramiz chunki bizga takrorlanmagan harf kerak
    } else {  // aks holda findWord da bo'lmasa
      findWord += word //oldin uni fineWord ga qo'shib qo'yamiz va 
      // word ning o'zi joylashgan joyidan keyingi belgilar ichidan qidiramiz
      return str.slice(index+1).includes(word) // va topilsa true aks holda false qaytaramiz
    } // agar false qaytsa shu yerda sikl tugaydi va result ga false qiymat o'zlashtiriladi
  })  // aks holda barcha harflar takrorlansa result ga true qiymat o'zlashtiriladi
  return result ? false : letter 
  // agar result true bo'lsa demak barcha harflar takrorlangan
  // shuning uchun false qaytaramiz
  // aks holda result false bo'lsa demak so'ngi ishlatilgan harf takrorlanmagan
  // shuning uchun letter ni qaytaramiz unda so'ngi ishlatilgan harf joylashgan bo'ladi
}

module.exports = firstNonRepeatedCharacter;
