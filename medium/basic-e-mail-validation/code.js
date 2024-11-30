function validateEmail(str) {
  // Your code here.
  let e = 0 //bu yerda biz '@' belgini index ini saqlaymiz
  if(str.includes('@') && str.includes('.') && (str.indexOf('@') < str.lastIndexOf('.'))) {
    // '@' borligini va '.' borligini va '@' ning joylashgan joyi '.' dan oldin bo'lishini tekshiramiz
    e = str.indexOf('@') // e ga '@' ni indexini joylashtiramiz
    if(str.charAt(e-1)) { // '@' ning joylashgan joyidan oldingi indexda element borligini tekshiramiz
      return true // shularning barchasi to'gri bo'lsa true qaytaramiz
    } else {return false} // aks holda false
  } else {return false} // oldingi shartlarga ham to'gri kelmasa false qaytaramiz
}

module.exports = validateEmail;
