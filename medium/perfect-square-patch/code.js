function squarePatch(n) {
  // Your code here.
  const arr = []; // javobni saqlash uchun array ochamiz
  for (let i = 0; i < n; i++) { // n marta for qilamiz
    arr.push(Array(n).fill(n)); 
    // har bir for qilishda n ta elementdan iborat array qo'shamiz
  }
  return arr; // arr ni return qilamiz
}

module.exports = squarePatch;
