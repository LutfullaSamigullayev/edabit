function hackerSpeak(str) {
  // Your code here.
  const hackerCode = { // bu yerda harflarning kodi bo'ladi
    a: '4',
    e: '3',
    i: '1',
    o: '0',
    s: '5',
  };  
  let res = '' // bu yerga javoblarni saqlab boramiz
  str.split('').forEach(e => { // strni split qilib forEach qilib tekshirib chiqamiz
    if(hackerCode[e]) { // agar kelgan element hackerCode da bo'lsa 
      res += hackerCode[e]  // uning hackerCode dagi kodini saqlaymiz
    } else {  // aks holda
      res += e  // uning asl qiymatini saqlaymiz
    }
  })
  return res // res ni return qilamiz
}

module.exports = hackerSpeak;
