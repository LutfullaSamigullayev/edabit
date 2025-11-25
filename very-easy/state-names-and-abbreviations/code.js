function filterStateNames(arr, type) {
  // Your code here.
  // Filtrlash: 'abb' bo'lsa faqat katta harfli qisqa nomlar olinadi
  // 'full' bo'lsa kamida bitta kichik harf bo'lgan nomlar olinadi
  return arr.filter(name => {
    if (type === "abb") {
      // Qisqartmalar — faqat katta harflardan iborat bo'ladi
      return /^[A-Z]+$/.test(name);
    } else {
      // To'liq nomlar — kamida bitta kichik harf bor
      return /[a-z]/.test(name);
    }
  });
}

module.exports = filterStateNames;
