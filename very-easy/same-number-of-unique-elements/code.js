function same(a1, a2) {
  // Your code here.
  // Har bir massivdagi unikal elementlarni Set yordamida topamiz
  const unique1 = new Set(a1);
  const unique2 = new Set(a2);

  // Set obyektining size xossasi unikal elementlar sonini bildiradi
  return unique1.size === unique2.size;
}

module.exports = same;
