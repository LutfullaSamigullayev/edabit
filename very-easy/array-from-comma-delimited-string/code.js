function toArray(str) {
  // Your code here.
  if(str.length === 0) { // Agar str ning uzunligi 0 ga teng bo'lsa
    return [] // bo'sh massiv ni return qilamiz
  } 
  // str ni split(', ')-"vergul va bo'sh joy" orqali bo'laklarga bo'lib array sifatida return qilamiz
  return str.split(', ')
}

module.exports = toArray;
