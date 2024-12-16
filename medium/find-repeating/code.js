function findRepeating(str) {
  // Your code here.
  const arr =  str.split('') // oldin str ni bo'laklarga bo'lib arrayga aylatirib olamiz
  const res = []        // bu yerga javoblarni saqlab boramiz
  let letter = ''       // bu yerda harflarni saqlab boramiz
  let startIndex = 0    // bu yerda boshlang'ich indexni saqlab boramiz
  let endIndex = 0      // bu yerda oxirgi indexni saqlab boramiz
  let count = 0         // bu yerda harflar sonini saqlab boramiz
  arr.forEach((word, index, arr) => { // keyin arr ni forEach qilib tekshirib chiqamiz
    if(word !== letter) { // agar kelgan harf letterga teng bo'lmasa
      if(index !== 0) { // va birinchi marta kelmagan  bo'lsa 
        res.push([letter, startIndex, endIndex, count]) 
      } // oldin avvalgi malumotlarni push qilib yuboramiz
      letter = word // va letterni hozirgi word ga teng qiloib qo'yamiz
      startIndex = index  // va boshlang'ich indexini belgilaymiz
      endIndex = index  // oxirgi indexini ham belgilab ketamiz
      count = 1 // soni 1 ga teng qilamiz
    } else {  // aks holda u avval kelgan bo'lsa 
      endIndex = index  // oxirgi indexini belgilaymiz
      count++   // va sonini 1 ga oshiramiz
    } 
    if(arr.length === index + 1) { // agar u oxirgi element bo'lsa 
      res.push([letter, startIndex, endIndex, count])
    } // malumotlarni push qilib yuboramiz
  } )
  return res // res ni return qilamiz
}

module.exports = findRepeating;
