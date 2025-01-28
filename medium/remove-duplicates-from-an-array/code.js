function removeDups(arr) {
  // Your code here.
  const res = [] // javoblarni saqlab borish uchun bosh array ochamiz
  arr.forEach(e => !res.includes(e) && res.push(e))
  // arr ni forEach qilib jar bir elemntni tekshirib chiqamiz
  // agar element res ichidan topilmasa uni res ga qo'shamiz
  return res // res ni return qilamiz
}

module.exports = removeDups;
