function simonSays(arr1, arr2) {
  // Your code here.
  arr1.pop() // arr1 ni pop orqali oxirgi elementini olib tashlaymiz
  arr2.shift() // arr2 ni shift orqali birinchi elementini olib tashlaymiz
  return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index])
  // ularning uzligi teng bo'lsa every orqali har birini tekshirib chiqamiz
  // agar hammasi bir xil bo'lsa true qaytaradi aks holda false
}

module.exports = simonSays;
