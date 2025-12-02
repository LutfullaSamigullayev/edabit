function addUp(num) {
  // Your code here.
  let sum = 0;
  // Yig'indini saqlash uchun boshlang'ich qiymat

  for (let i = 1; i <= num; i++) {
    // 1 dan n gacha bo'lgan sonlarni aylanamiz
    sum += i;
    // Har bir sonni yig'indiga qo'shamiz
  }

  // Yakuniy natijani return qilamiz
  return sum;
}

module.exports = addUp;
