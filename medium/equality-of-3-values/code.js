function equal(a, b, c) {
  // Your code here.
  if (a === b && b === c) { // agar barcha sonlar bir xil bo'lsa
    return 3;  // 3 tasi ham bir xil deb chiqaramiz
  } else if (a === b || b === c || a === c) { // agar ikki tasi bir xil bo'lsa
    return 2;  // 2 tasi bir xil deb chiqaramiz
  } else {
    return 0;  // aks holda 0 chiqaramiz
  }
}

module.exports = equal;
