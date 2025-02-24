function erase(s) {
  // Your code here.
  const res = [] // bu yerga hafrlarni qo'shib boramiz
  s.split('').forEach(word => { // s ni bo'lakalrga bo'lib har birini tekshirib chiqamiz
    if(word === '#') { // agar word # ga teng bo'lsa 
      res.pop() // res dan so'ngi belgini o'chiramiz
    } else { // aks holda
      res.push(word) // uni res ga qo'shamiz
    }
  })
  return res.join('') // res ni stringga aylantirib return qilamiz
}

module.exports = erase;
