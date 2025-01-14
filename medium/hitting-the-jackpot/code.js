function testJackpot(result) {
  // Your code here.
  return result.every(e => e === result[0])
  // resultni every qilib har bir e ni result ning 0-elelmentiga solishtirib chiqamiz
  // agar barchasi bir xil bo'lsa true qaytadi aks holda false
}

module.exports = testJackpot;
