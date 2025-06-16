function sameCase(str) {
  // Your code here.
  // Stringni to'liq kichik harfga va to'liq katta harfga o'tkazib taqqoslaymiz
  return str === str.toLowerCase() || str === str.toUpperCase();
}

module.exports = sameCase;
