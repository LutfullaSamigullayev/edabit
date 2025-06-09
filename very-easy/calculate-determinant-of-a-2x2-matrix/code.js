function calcDeterminant(matrix) {
  // Your code here.
  // Matritsaning elementlarini ajratib olish
  const [[a, b], [c, d]] = matrix;
  
  // Determinant formulasi: ad - bc
  return (a * d) - (b * c);
}

module.exports = calcDeterminant;
