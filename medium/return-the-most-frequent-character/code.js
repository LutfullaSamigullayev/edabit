function mostFrequentChar(arr) {
  // Your code here.
  const newarr = arr.join('').split('');
  // arr ni join qilib hammasini bir qatorga qilib keyin split qilib harflarni bo'laklarga ajratib olamiz
  const obj = {}; // bu yerga harflar necha marta takrorlanganligini saqlaymiz
  newarr.forEach((item) => { // har bir harfni obj ga qo'shamiz
    if (obj[item]) { // agar obj da shu harf bor bo'lsa
      obj[item] += 1; // shu harfni 1 ga oshiramiz
    } else { // aks holda
      obj[item] = 1; // shu harfni 1 ga tenglashtiramiz
    } 
  });
  const max = Math.max(...Object.values(obj)); 
  // obj ni qiymatlarini larini massivga aylantiramiz va eng katta qiymatni topamiz
  const result = Object.keys(obj).filter((key) => obj[key] === max); 
  // obj keys orqali har bir key ni filtr qilamiz va qiymati max ga teng bo'lsa result ga qo'shamiz
  return result.sort() //result ni sort qilib tartiblab return qilamiz

}

module.exports = mostFrequentChar;
