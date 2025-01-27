function rangedReversal(arr, start, end) {
  // Your code here.
  const arrStart = arr.slice(0, start); 
  // bu yerda arr ning 0 dan start gacha bo'lgan elementlarini olamiz
  const arrCenter = arr.slice(start, end + 1).reverse()
  // bu yerda arr ning start dan end gacha bo'lgan elementlarini olamiz va ularni teskari tartibda qaytarib beramiz
  const arrEnd = arr. slice(end + 1)
  // bu yerda arr ning end dan keyin gacha bo'lgan elementlarini olamiz
  return [...arrStart, ...arrCenter, ...arrEnd] 
  // bu yerda olgan elementlarni bir qatorga joylaymiz va reurn qilamiz
}

module.exports = rangedReversal;
