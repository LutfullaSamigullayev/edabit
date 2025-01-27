function remix(str, arr) {
  // Your code here.
  let res = [] // javoblarni saqlash uchun bo'sh array yaratamiz
  str.split('').forEach((word, index) => { 
    // str ni split orqali harflarga ajratib, har birini forEach orqali tekshiramiz
    res[arr[index]] = word 
    //arr ning indexidan kelgan raqamni res indexi sifatida qo'shamiz va harfini joylashtiramiz
  })
  return res.join('') // javoblarni join orqali stringga aylantiramiz va return qilamiz
}

module.exports = remix;
