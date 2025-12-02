function percentDiff(num1, num2) {
  // Your code here.
  // Ikki son orasidagi absolyut farqni olamiz
  const diff = Math.abs(num1 - num2);

  // O'rtacha qiymatni hisoblaymiz
  const average = (num1 + num2) / 2;

  // Foiz farqini topamiz
  const percent = (diff / average) * 100;

  // Natijani 1 ta kasr xonasigacha yaxlitlab qaytaramiz
  return Number(percent.toFixed(1));
}

module.exports = percentDiff;
