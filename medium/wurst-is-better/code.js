function wurstIsBetter(str) {
  // Your code here.
  const German = [
    "bratwurst",
    "kochwurst",
    "leberwurst",
    "mettwurst",
    "rostbratwurst",
  ]
  // Nemis kolbasalari ro'yxati
  const list = [
    "kielbasa",
    "chorizo",
    "moronga",
    "salami",
    "sausage",
    "andouille",
    "naem",
    "merguez",
    "gurka",
    "snorkers",
    "pepperoni",
  ]
  // Almashtiriladigan kolbasalar ro'yxati

  const res = [] // bu yerga javoblarni saqlab boramiz
  str.split(' ').forEach(word => { // str ni so'zlarga bo'lib tekshirib chiqamiz
    let apostrophe = false // Apostrof borligini aniqlab qo'yish uchun o'zgaruvchi
    let str = '' // Apostrof dan oldinigi qism uchun joy
    let word2 = '' // Apostrof dan keyingi qisim uchun joy
    const arr2 = word.split('') // so'zni harflarga bo'lib qo'yamiz

    if(arr2.includes('’')) { // agar so'zni ichida Apostrof bo'lsa
      apostrophe = true // apostrophe ni true qilib qo'yamiz
      const arr = word.split('’') // so'zni Apostrof orqali bo'laklarga bo'lamiz
      str = arr[0] // va birinchi bo'lakini strga joylaymiz
      word2 = arr[1] // ikkinchi bo'lakini word2 ga joylaymiz
    }

    if(list.includes(word.toLowerCase()) || list.includes(word2.toLocaleLowerCase())) {
      // agar word yoki word2 list ichidan topilsa
      if(apostrophe) { // agar apostrophe true bo'lsa
      res.push(`${str}’Wurst`) 
      // res ga str ’-Apostrof va Wurst ni qo'shib push qilib yuboramiz 
      } else{ // aks holda Apostrof false bo'lsa
        res.push('Wurst') // word ni o'rni Wurst ni push qilamiz
      }
    } else { // agar word list ni ichida bo'lmasa
        res.push(word) // word ni o'zini res ga push qilamiz
    }
  })
  return res.join(' ') // res ni birlashtirib return qilamiz

}

module.exports = wurstIsBetter;
