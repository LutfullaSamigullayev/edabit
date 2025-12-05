function convertToDecimal(perc) {
  // Your code here.
  return perc.map(item => {
    // % belgisini olib tashlab, son holatiga o‘tkazamiz
    const num = parseFloat(item.replace("%", ""));

    // Foizni o‘nlik kasrga aylantiramiz
    return num / 100;
  });
}

module.exports = convertToDecimal;
