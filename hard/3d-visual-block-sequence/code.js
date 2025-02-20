function blocks(step) {
  // Your code here.
  if (step === 0) return 0; // Agar step 0 bo'lsa, bloklar yo'q
  // Bloklar formulasini 
  return Math.round(0.5 * step * step + 5.5 * step - 1);
}

module.exports = blocks;
