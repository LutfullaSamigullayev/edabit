function findBrokenKeys(str1, str2) {
  // Your code here.
  let newstr1 = str1.split('') // str1 ni bo'laklarga bo'lamiz
  let newstr2 = str2.split('') // str2 ni ham bo'laklarga bo'lamiz
  const res = [] // res ga o'zgargan harflarni saqlab boramiz
  newstr1.forEach((word, index) => { // barcha harflarni taqqoslab chiqamiz
    if(word !== newstr2[index]) { // agar harflar mos kelmasa
      if(!res.includes(word)) { // va u hali res ga qo'shilmagan bo'lsa
        res.push(word) // uni res ga push qilamiz
      }
    }
  })
  return res // res ni return qilamiz
}

module.exports = findBrokenKeys;
