function indexOfCaps(str) {
  // Your code here.
  const arr = str.split(''); // str ni split qilib arrayga aylantiramiz
  const res = [] // javobni saqlash uchun bo'sh array yaratamiz
  arr.forEach((e, i) => { // arrayni forEach orqali aylantiramiz
    if(e === e.toUpperCase() && e !== e.toLowerCase()) {
      // agar element katta harf bo'lsa va kichik harf bo'lmasa
      res.push(i) // shu elementning indexini res ga qo'shamiz
    }
  })
  return res // res ni return qilamiz
}

module.exports = indexOfCaps;
