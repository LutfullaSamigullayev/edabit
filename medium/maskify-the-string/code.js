function maskify(str) {
  // Your code here.
  let res = '' // bu yerga javobni saqlaymiz
  if(str.length > 4) {  // agar str ning uzunligi 4 dan katta bo'lsa
    res = "#".repeat(str.length-4)+str.slice(-4)
    // songi 4 elementingi olib qolgan joyiga # qo'yib res ga joylaymiz
  } else { // aks holda str ni res ga joylaymiz
    res = str
  }
  return res // res ni  return qilamiz
}

module.exports = maskify;
