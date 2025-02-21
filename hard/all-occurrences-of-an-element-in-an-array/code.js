function getIndices(arr, el) {
  // Your code here.
  const res = [] // indexlarni saqlash uchun bo'sh massiv
  arr.forEach((e,i) => { // arr ni forEach qilib tekshirib chiqamiz
    if(e === el) { // agar e el ga teng bo'lsa
      res.push(i) // uning indexini res ga push qilamiz
    }
  })
  return res // res ni return qilamiz
}

module.exports = getIndices;
