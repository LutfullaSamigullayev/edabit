function mean(arr) {
  // Your code here.
  let sum = 0;
  // Yig'indini saqlash uchun boshlang'ich qiymat

  for (let i = 0; i < arr.length; i++) {
    // Massivdagi barcha sonlarni qo'shamiz
    sum += arr[i];
  }

  // O'rtacha qiymatni hisoblaymiz
  let average = sum / arr.length;

  // Natijani 2 ta kasr xonasigacha yaxlitlab qaytaramiz
  return Number(average.toFixed(2));
}

module.exports = mean;
