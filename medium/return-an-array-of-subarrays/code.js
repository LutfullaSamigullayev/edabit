function matrix(x, y, z) {
  // Your code here.
  return Array(x).fill(Array(y).fill(z))
  // Array(x) -> x ta elementlari bo'lgan array yaratamiz
  // fill -> arrayni ichiga qanday elementlar qo'shishni bildiradi
  // Array(y).fill(z) -> y ta elementlari bo'lgan array yaratamiz va ularni z bilan to'ldiramiz
}

module.exports = matrix;
