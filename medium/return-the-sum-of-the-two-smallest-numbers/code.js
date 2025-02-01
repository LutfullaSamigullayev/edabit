function sumTwoSmallestNums(arr) {
  // Your code here.
  const newarr = arr.filter(num => num >= 0).sort((a, b) => a-b)
  // arr ni filter qilib manfiy sonlarni olib tashlab chiqamiz
  // keyingi qadamda sort qilib chiqamiz
  return newarr[0] + newarr[1] // eng kichik 2 ta sonni qo'shib chiqamiz
}

module.exports = sumTwoSmallestNums;
