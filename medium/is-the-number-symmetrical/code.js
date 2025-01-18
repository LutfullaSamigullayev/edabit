function isSymmetrical(num) {
  // Your code here.
  return +(num.toString().split('').reverse().join('')) === num
  // num ni string qilib split orqali arr ga aylantirib va reverse bilan teskarisiga
  // aylantirib yana qo'shib qo'yib stringga aylantiramiz
  // va hosil bo'lgan teskari sonni string ko'rinishidan '+' orqali Number qilamiz
  // va javobni num bilan solishtirib return qilamiz
}

module.exports = isSymmetrical;
