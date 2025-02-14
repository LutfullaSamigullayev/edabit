function tidyBooks(arr) {
  // Your code here.
  const res = [] // bu yerga javoblarni push qilib boramiz
  arr.forEach(str => str.split('-').forEach(word => res.push(word.trim())))
  // arr ni forEach orqali har bir kitobni olib chiqamiz
  // va uni split orqali '-'belgi bo'yicha bo'laklarga bo'lib
  // hosil bo'lgan str[array] ni forEach qilib
  // har bir so'zni trim bilan oldi va oxiridagi ortiqcha bo'sh joylarni olib
  // res ga push qilib chiqamiz
  return res // res ni return qilamiz
}

module.exports = tidyBooks;
