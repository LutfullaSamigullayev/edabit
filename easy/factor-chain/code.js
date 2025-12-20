function factorChain(arr) {
  // Your code here.
   // Har bir element keyingi elementning bo'luvchisi bo'ladimi?
   for (let i = 0; i < arr.length - 1; i++) {
    // Agar keyingi element hozirgi elementga karrali bo'lmasa, chain emas
    if (arr[i + 1] % arr[i] !== 0) {
      return false;
    }
  }

  // Barcha shartlar bajarildi
  return true;
}

module.exports = factorChain;
