function changeEnough(change, amountDue) {
  // Your code here.
  const res = (change[0]*0.25) + (change[1]*0.10) + (change[2]*0.05) + (change[3]*0.01)
  // 0-indexni 0.25 ga, 1-indexni 0.10 ga, 2-indexni 0.05 ga va 3-indexni 0.01 ga ko'paytirib
  // cho'ntakda bo'r bo'lgan summani chiqaramiz keyin
  return res >= amountDue // cho'ntakdagi pul mahsulot narxiga yetsa true qaytaradi
}

module.exports = changeEnough;
