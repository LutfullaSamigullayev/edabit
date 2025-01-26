function uniqueSort(arr) {
  // Your code here.
  const res = [] // javoblarni saqlash uchun bo'sh array yaratamiz
  arr.forEach(num => !res.includes(num) && res.push(num))
  // arr ni forEach orqali tekshiramiz agar res da num yo'q bo'lsa unga qo'shamiz
  return res.sort((a, b) => a - b) // va res ni sort qilib return qilamiz
}

module.exports = uniqueSort;
