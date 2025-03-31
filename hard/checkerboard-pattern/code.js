function isCheckerboard(matrix) {
  // Your code here.
  let n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = matrix[i][j];
      
      // Chap va o'ng tomondagi elementlar bilan farq qilish kerak
      if (j > 0 && matrix[i][j - 1] === current) return false;
      if (j < n - 1 && matrix[i][j + 1] === current) return false;
      
      // Yuqori va pastki elementlar bilan farq qilish kerak
      if (i > 0 && matrix[i - 1][j] === current) return false;
      if (i < n - 1 && matrix[i + 1][j] === current) return false;
      
      // Diagonal yo'nalishdagi elementlar bilan bir xil bo‘lishi kerak
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] !== current) return false;
      if (i > 0 && j < n - 1 && matrix[i - 1][j + 1] !== current) return false;
      if (i < n - 1 && j > 0 && matrix[i + 1][j - 1] !== current) return false;
      if (i < n - 1 && j < n - 1 && matrix[i + 1][j + 1] !== current) return false;
    }
  }
  return true;
}

module.exports = isCheckerboard;
