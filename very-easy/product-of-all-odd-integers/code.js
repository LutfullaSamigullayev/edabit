function oddProduct(arr) {
  // Your code here.
  // oldin arr ni filter qilib faqat toq sonlarni olamiz
  // keyin reduce qilib ularni ko'paytiramiz
  return arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc * num, 1);
}

module.exports = oddProduct;
