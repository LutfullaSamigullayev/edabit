function mysteryFunc(num) {
  // Your code here.
  let summ = 1 // bu yerda javoblarni ko'paytiramiz
  num.toString().split('').forEach(n => summ *= Number(n))
  // num ni stringga aylantiramiz, split orqali har bir raqamni ajratib olib forEach orqali ko'paytiramiz
  return summ // summ ni return qilamiz
}

module.exports = mysteryFunc;
