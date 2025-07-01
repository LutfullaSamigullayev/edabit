function hammingDistance(str1, str2) {
  // Your code here.
  let count = 0 // farqlarni hisoblab borish uchun o'zgaruvchi ochamiz
  // keyin for orqali str1 va str2 larning har birini indexi bo'yicha
  // solishtirib chiqamiz
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) { // agar ular bir biridan farq qilsa
      count++ // countni 1 ga oshiramiz
    }
  }
  return count // count ni return qilamiz
}

module.exports = hammingDistance;
