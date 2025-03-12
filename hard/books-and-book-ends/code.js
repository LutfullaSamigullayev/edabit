function countUniqueBooks(s, bookend) {
  // Your code here.
  let res = [] // bu yerga natijalarni saqlab boramiz
  let start = false // bu yerga natijani saqlash mumkinligini tekshiramiz
  s.split('').forEach(e => { // s ni bo'laklarga bo'lib har birini tekshiramiz
    if(e === bookend) { // agar e bookend ga teng bo'lsa
      if(start) { // va start allaqachaon true bo'lgan bo'lsa
        start = false // uni false qilamiz
      } else { // aks holda 
        start = true // uni true qilamiz
      }
    } // agar e bookend ga teng bo'lmasa start true bo'lsa va e res ichidan topilmasa
    if(e !== bookend && start && !res.includes(e)) {
      res.push(e) // uni res ga push qilamiz
    }
  })
  return res.length // res ni uzunligini return qilamiz
}

module.exports = countUniqueBooks;
