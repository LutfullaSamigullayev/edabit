function canCapture([yourRook, opponentsRook]) {
  // Your code here.
  // Agar birinchi harflar (ustunlar) yoki ikkinchi raqamlar (qatorlar) bir xil bo‘lsa
  return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}

module.exports = canCapture;
