function divisible(arr) {
  // Your code here.
  // arr ni yig'indisini hisoblaymiz
  const sum = arr.reduce((a, b) => a + b, 0);
  
  // arr ni ko'paytmasini hisoblaymiz
  const product = arr.reduce((a, b) => a * b, 1);

  // oldin sumni 0 ga teng emasligini tekshiramiz
  if (sum === 0) return false;

  // ko'paytmani yig'indiga bo'lamiz va butun sonligini tekshiramiz
  return product % sum === 0;
}

module.exports = divisible;
