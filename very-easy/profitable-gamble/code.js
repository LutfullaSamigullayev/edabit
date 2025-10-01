function profitableGamble(prob, prize, pay) {
  // Your code here.
  // Foyda sharti: agar ehtimol * mukofot > xarajat bo‘lsa
  return prob * prize > pay;
}

module.exports = profitableGamble;
