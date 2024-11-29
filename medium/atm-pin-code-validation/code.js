function validatePIN(pin) {
  // Your code here.
  return (pin.length === 4 || pin.length === 6 ) &&  (/^\d+$/.test(pin))
  // olding uzunligi 4 yoki 6 ga teng bo'lishi kerak va Regex orqali barchasi raqam ekanligini tekshiradi
}

module.exports = validatePIN;
