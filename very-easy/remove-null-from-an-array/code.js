function removeNull(arr) {
  // Your code here.
  // filter() orqali null qiymatlarni chiqarib tashlaymiz
  return arr.filter(item => item != null);
}

module.exports = removeNull;
