function almostPalindrome(str) {
  // Your code here.
  const polindrom = str.split('').reverse() 
  // str ni teskarisini polindromga joylaymiz
  const summ = polindrom.filter((word, index) => word !== str[index])
  // polindrom ni filter qilib str bilan solishtirib chiqamiz
  // joylashuv bo'yicha bir xil bo'lmagan harflarni return qilamiz
  return summ.length === 2 
  // agar summ ni length 2 ga teng bo'lsa true aks holda false return qilamiz
}

module.exports = almostPalindrome;
