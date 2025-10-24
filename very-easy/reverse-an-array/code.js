function reverse(arr) {
  // Your code here.
  let res = [];
  // natijlarni saqlash uchun bo'sh array yaratamiz
  for (let i = arr.length - 1; i >= 0; i--) {
    // arrayni teskari tartibda aylanamiz
    res.push(arr[i]);
    // har bir elementni yangi arrayga qo'shamiz
  }
  // res arrayni return qilamiz
  return res;
}

module.exports = reverse;
