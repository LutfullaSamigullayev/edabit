function tree(h) {
  // Your code here.

  if (h === 0) return []; // Agar h = 0 bo'lsa, bo'sh ro'yxat qaytarish
  if (h === 1) return ["#"]; // Agar h = 1 bo'lsa, bitta ro'yxat qaytarish

  const treeRows = [];
  const maxWidth = 2 * h - 1; // Oxirgi qatordagi maksimal kenglik

  for (let i = 1; i <= h; i++) {
    const numStars = 2 * i - 1; // Yulduzlar soni
    const numSpaces = (maxWidth - numStars) / 2; // Bo'sh joylar soni
    const row = " ".repeat(numSpaces) + "#".repeat(numStars) + " ".repeat(numSpaces); // Qator yaratish
    treeRows.push(row); // Ro'yxatga qo'shish
  }

  return treeRows; // Natijaviy ro'yxatni qaytarish
}

module.exports = tree;
