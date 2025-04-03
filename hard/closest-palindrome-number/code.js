function closestPalindrome(num) {
  // Your code here.
  function isPalindrome(n) {
    // Sonni stringga o‘giramiz, teskarisini olib solishtiramiz
    return n.toString() === n.toString().split("").reverse().join("");
  }
// Agar n o‘zi palindrom bo‘lsa, shu sonni qaytaramiz
    if (isPalindrome(num)) return num;

    let lower = num - 1; // n dan kichik sonlarni tekshirish uchun
    let upper = num + 1; // n dan katta sonlarni tekshirish uchun

    while (true) { // Cheksiz sikl, taqqoslash natijasiga qarab chiqiladi
        if (isPalindrome(lower)) return lower; // Agar past tomondan topilsa, shu qaytariladi
        if (isPalindrome(upper)) return upper; // Agar yuqori tomondan topilsa, shu qaytariladi
        lower--; // Kichikroq sonni tekshiramiz
        upper++; // Kattaroq sonni tekshiramiz
    }
}

module.exports = closestPalindrome;
