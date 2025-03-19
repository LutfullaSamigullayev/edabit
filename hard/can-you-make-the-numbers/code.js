function canBuild(digits, arr) {
  // Your code here.
  let newarr = Array(10).fill(0) // oldin yangi array hosil qilib 0 lar bilan to'ldiramiz
  arr.forEach(nums =>  nums.toString().split('').forEach(num => newarr[+num]++))
  // arr ni forEach qilib kelgan raqamni stringga aylantirib bo'laklarga bo'lib
  // har bir raqamni newarr ning shunga teng indexi bo'yicha 1 ga oshirib chiqamiz
  // yani 1 bo'lsa 1-indexni 2-bo'lsa 2-indexni va hakazo shu tariqa
  // qaysi sondan necha ekanligini aniqlaymiz
  return digits.every((num, index) => num >= newarr[index])
  // va digits ni every qilib newarr bilan solishtirib chiqamiz
  // agar barcha sonlar yetarli bo'lsa true aks holda false return qilamiz
}

module.exports = canBuild;
