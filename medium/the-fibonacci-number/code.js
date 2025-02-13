function fibonacci(num) {
  // Your code here.
  let a = 1, b = 1;
  // a va b ni 1 ga tenglashtiramiz, bu Fibonacci ketma-ketligining dastlabki ikki qiymati

  for (let i = 2; i <= num; i++) {
    // 2-dan boshlab num gacha bo'lgan sonlar uchun takrorlash
    let temp = a + b;
    // temp ga a va b ning yig'indisini saqlaymiz
    a = b;
    // a ni b ga tenglashtiramiz
    b = temp;
    // b ni temp ga tenglashtiramiz, bu yangi Fibonacci qiymati
  }

  return b;
  // num ga teng bo'lgan Fibonacci qiymatini qaytarish
}

module.exports = fibonacci;
