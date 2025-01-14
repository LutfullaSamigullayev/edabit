function indexMultiplier(arr) {
  // Your code here.
  let res = 0 // bu yerda javoblarni qo'shib boramiz
  arr.forEach((num, index) => res += num * index)
  // arr ni forEach qilib num ni indexga ko'paytirib javobni res ga qo'shib boramiz
  return res  // res ni return qilamiz
}

module.exports = indexMultiplier;
