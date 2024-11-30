function bbqSkewers(grill) {
  // Your code here.
  let o = 0 // o larni hisoblab borish uchun o'zgaruvchi ochamiz
  let x = 0 // x larni hisoblab borish uchun o'zgaruvchi ochamiz
  grill.forEach(e => { // grill ni foreach qilib har biri stringni tekshiramiz
    e.includes('x') ? x++ : o++ // agar e ning ichida x bo'lsa x ni 1 ga oshiramiz 
  });       // aks holda o ni 1 ga oshiramiz
  return [o, x]   // javobni massiv ko'rinishida qaytaramiz
}

module.exports = bbqSkewers;
