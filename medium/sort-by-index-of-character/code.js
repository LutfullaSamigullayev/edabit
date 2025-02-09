function sortByCharacter(arr, n) {
  // Your code here.
  return arr.sort((a, b) => a[n-1].localeCompare(b[n-1]))
  // localeCompare - ikki belgini alfavit tartibida solishtiradi
  // har bir elementning n-chi belgisi bo'yicha 
  // 0-indeksdan boshlanganligi uchun n dan 1 ni ayiramiz
}

module.exports = sortByCharacter;
