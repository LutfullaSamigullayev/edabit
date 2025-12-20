function countOnes(matrix) {
  // Your code here.
  let count = 0;
  // nechta 1 borligini sanash uchun o'zgaruvchi

  for (let i = 0; i < matrix.length; i++) {
    // tashqi massiv bo'ylab aylanamiz
    for (let j = 0; j < matrix[i].length; j++) {
      // ichki massiv elementlarini tekshiramiz
      if (matrix[i][j] === 1) {
        // agar qiymat 1 bo'lsa
        count++;
        // sanagichni oshiramiz
      }
    }
  }

  // yakuniy natijani qaytaramiz
  return count;
}

module.exports = countOnes;
