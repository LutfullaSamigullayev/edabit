function checkEquals(arr1, arr2) {
  // Your code here.
  return arr1.every((num, index) => num === arr2[index])
  // arr1 ni every qilib har bir num ni o'zgi jo'ylashgan joy bo'yichi arr2 
  // bilan solishtirib chiqamiz agar hammasi bir xil bo'lsa true qaytadi
  // aks holda bittasi to'gri kelmasa shu yerda ishini tugatadi
  // va false qaytadi
}

module.exports = checkEquals;
