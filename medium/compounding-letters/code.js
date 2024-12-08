function accum(str) {
  // Your code here.
  let res = '' // bu yerga javoblarni push qilib boramiz
  str.toLowerCase().split('').forEach((e,i) => {  // keyin strni kichik harf qilib bo'laklarga bo'lib forEach qilamiz
    if( i === 0 ){  // 0 indexda faqat 1 katta harf bo'ladi
      res += e.toUpperCase()
    } else {  // qolganlarini oldida '-' va 1-katta harf va qolganlari i soni bo'yicha kichk harflardan iborat bo'ladi
    res += '-'+e.toUpperCase()+e.repeat(i) //shularni yigib res ga qo'shib boramiz
    }
  })
  return res  // res ni return qilamiz
}

module.exports = accum;
