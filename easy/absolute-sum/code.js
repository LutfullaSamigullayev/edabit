function getAbsSum(arr) {
  // Your code here.
  let sum = 0;
  // Yig'indini saqlash uchun boshlang'ich qiymat

  for (let i = 0; i < arr.length; i++) {
    // Massivni boshidan oxirigacha aylanamiz
    sum += Math.abs(arr[i]);
    // Har bir elementning absolyut qiymatini yig'indiga qo'shamiz
  }

  // Yakuniy natijani return qilamiz
  return sum;
}

module.exports = getAbsSum;
