function findLargestNums(arr) {
  // Your code here.
  // Har bir ichki massivni map() orqali aylantiramiz
  return arr.map(innerArr => {
    // Math.max() eng katta sonni topadi
    // ...innerArr → spread operator, massiv elementlarini alohidaargumentga aylantiradi
    return Math.max(...innerArr);
  });
}

module.exports = findLargestNums;
