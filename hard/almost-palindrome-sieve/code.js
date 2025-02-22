function palindromeSieve(nums) {
  // Your code here.
  // Palindromni tekshirish
  function isPalindrome(num) {
    let str = num.toString();
    return str === str.split("").reverse().join("");
  }

  // Deyarli palindromni tekshirish
  function isAlmostPalindrome(num) {
    let freq = {};
    let str = num.toString();

    // Har bir raqamni necha marta uchraganini hisoblash
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
      // Agar raqam birinchi marta uchrasa, unga 1 qiymat qo‘yiladi
      // Agar allaqachon mavjud bo‘lsa, 1 qo‘shiladi
    }

    // Toq marta uchragan raqamlarni sanash
    let oddCount = Object.values(freq).filter(
      (count) => count % 2 !== 0
    ).length;

    // Agar 1 yoki 0 ta raqam toq uchrasa, bu deyarli palindrom
    return oddCount <= 1;
  }

  return nums.filter((num) => isPalindrome(num) || isAlmostPalindrome(num));
}

module.exports = palindromeSieve;
