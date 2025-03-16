function canPatch(bridge, planks) {
  // Your code here.

  let broken = [] // bu yerga ko'prikning teshik joylarni uzunligini saqlaymiz
  let zero = 0 // bu yerda teshik joylar sonini hisoblaymiz

  bridge.forEach(num => { // bridge ni forEach qilib ketma-ket kelgan 0 larrni topamiz
    if(num === 0) { // agar num 0 ga teng bo'lsa
      zero ++ // zeroni 1 ga oshiramiz
    } else if(zero > 1) { // aks holda zero 1 da katta bo'lsa
      broken.push(zero) // uni brokenga push qilamiz
      zero = 0 // va zero ni 0 ga tushirib qo'yamiz
    } else { // aks holda zero 1 ga teng bo'lsa
      zero = 0 // unda ham zeroni 0 ga tushirib qo'yamiz
    }
  }) // shu bilan bridgedagi teshik joylar uzunligini brokenga saqlaymiz
  
  if(broken.length === 0) { // agar broken uzunligi 0 ga teng bo'lsa
    return true // demak ko'prikdan o'tish mumkin va true qaytaramiz
  } // aks holda ko'prikni yamash mumkinligi tekshirib chiqamiz
  
  let newPlanks = [...planks] // ni yangi o'zegaruvchiga o'zlashtiramiz

  // bu fuksiya orqali ishlatilgan raqamni array olib tashlaymiz
  function removeFirstOccurrence(arr, target) {
    let removed = false; // Faqat 1 marta o‘chirish uchun flag
    return arr.filter(num => { // array filtrlab kelgan raqamni olib tashlaydi
        if (num === target && !removed) {
            removed = true; // Birinchi uchragan target ni o‘chiramiz
            return false;
        }
        return true;
    });
  }

  return broken.every(num => {
     // broken ni every qilib barcha teshiklarni yopish mumkinligini tekshiramiz
    if(newPlanks.includes(num - 1)) { // agar num-1 newPlanks ichida bo'lsa
      // demak bu teshikni yopish uchun taxta bor
      // funksiya orqali osha taxtani arr ichidan olib tashlaymiz
      // va natijani yangilaymiz
      newPlanks = removeFirstOccurrence(newPlanks, (num - 1)) 
      return true // true ni return qilamiz va tekshirishni davom ettiramiz
    } else if(newPlanks.includes(num)) { // agar num newPlanks ichida bo'lsa
      // demak bu teshikni yopish uchun taxta bor
      // funksiya orqali osha taxtani arr ichidan olib tashlaymiz
      // va natijani yangilaymiz
      newPlanks = removeFirstOccurrence(newPlanks, num)
      return true // true ni return qilamiz va tekshirishni davom ettiramiz
    } else  return false // aks holda false return qilamiz va shu yerda ishni yakunlaymiz
  })

}

module.exports = canPatch;
