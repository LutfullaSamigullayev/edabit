function quadraticEquation(a, b, c) {
  // Your code here.
  const discriminant = b ** 2 - 4 * a * c
  // diskriminant ni topib olamiz
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
  // x1 ni topib olamiz
  return x1 // x1 ni qaytarib beramiz
}

module.exports = quadraticEquation;
