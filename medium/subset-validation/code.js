function validateSubsets(subsets, set) {
  // Your code here.
  return subsets.every(arr => arr.every(num => set.includes(num)))
  // subsets ni every orqali ichida barcha array ni tekshirib chiqamiz,
  // arr ni ichidagi raqamlarni set ichidan qidiramiz
  // agar barchasi topilsa true qaytaradi aks holda false 
}

module.exports = validateSubsets;
