function isSmooth(sentence) {
  // Your code here.
  const arr = sentence.split(' ') // matnni so'zlarga bo'lib chiqamiz
  let end = '' // bu yerga so'ngi harfni saqlab boramiz
  return arr.every((word, index) => { // har bir so'zni tekshiramiz
    if(index === 0 || word[0].toLowerCase() === end) {
      // agar index 0 ga teng bo'lsa uni faqat oxirgi harifini olamiz
      // yoki word ning birinchi elementi end ga teng bo'lsa
      end = word[word.length-1].toLowerCase()
      // endi qiymatini yanigilaymiz va true ni return qilamiz
      return true
    } else { // aks holda false ni return qilamiz
      return false
    }
  })

}

module.exports = isSmooth;
