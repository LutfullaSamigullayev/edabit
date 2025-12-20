function minMax(arr) {
  // Your code here.
  // Eng kichik qiymatni topamiz
  const min = Math.min(...arr);
  // Eng katta qiymatni topamiz
  const max = Math.max(...arr);

  // Ikkalasini massiv qilib qaytaramiz
  return [min, max];
}

module.exports = minMax;
