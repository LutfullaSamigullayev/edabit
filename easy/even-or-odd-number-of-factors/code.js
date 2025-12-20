function factorGroup(num) {
  // Your code here.
  // Agar n mukammal kvadrat bo'lsa (masalan 36 -> 6*6)
  // Unda bo'luvchilar soni toq bo'ladi
  const root = Math.sqrt(num);

  if (Number.isInteger(root)) {
    // Mukammal kvadrat: bo'luvchilar soni toq
    return "odd";
  }

  // Aks holda bo'luvchilar soni juft
  return "even";
}

module.exports = factorGroup;
