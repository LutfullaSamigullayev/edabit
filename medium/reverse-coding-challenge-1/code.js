function mysteryFunc(str) {
  // Your code here.
  let res = '' // javobni saqlash uchun bo'sh string
  for (let i = 0; i < str.length; i += 2) { 
    // for loop orqali str ni aylanib chiqamiz
    res += str[i].repeat(str[i + 1])
    // res ga str[i] ni str[i + 1] marta qo'shib yozamiz
  }
  return res // res ni return qilamiz
}

module.exports = mysteryFunc;
