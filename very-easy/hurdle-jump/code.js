function hurdleJump(hurdles, jumpHeight) {
  // Your code here.
  // hurdles ni every metodi orqali har birini 
  // jumpHeight bilan solishtirib chiqamiz
  // agar barchasi jumpHeight dan kichik bo'lsa true 
  // aks holda 1tasi katta bo'lsa ham false ni return qiladi
  return hurdles.every(num => jumpHeight >= num)
}

module.exports = hurdleJump;
