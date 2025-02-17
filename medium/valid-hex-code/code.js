function isValidHexCode(str) {
  // Your code here.
  return /^#[A-Fa-f0-9]{6}$/.test(str);
  // ^ - Stringning boshidan tekshirishni boshlaydi
  // # - String "#" belgisi bilan boshlanishi kerak
  // [A-Fa-f0-9]{6} - Keyingi 6 ta belgi "A-F", "a-f" yoki "0-9" bo'lishi kerak
  // $ - String oxirigacha faqat shu belgilar bo'lishi kerak
}

module.exports = isValidHexCode;
