function reverse(bool) {
  // Your code here.
  // Agar qiymat boolean bo‘lsa, teskari qiymatini qaytaramiz
  if (typeof bool === "boolean") {
    return !bool;
  }
  // Aks holda, xatolik matnini qaytaramiz
  return "boolean expected";
}

module.exports = reverse;
