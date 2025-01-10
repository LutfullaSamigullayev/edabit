function getFrequencies(arr) {
  // Your code here.
  let res = {} // bu obyektda elementlarni necha marta takrorlanganligini hisoblab boramiz
  arr.forEach(element => {  //arr ni forEach qilib tekshirib chiqamiz
    if(!res[element]) { // agar element obj ichida bo'lmasa
      res[element] = 1  // res ichidan element kalit ochib valuesini 1 qilib qoyamiz
    } else {  // aks holda res ichida element kaliti mavjud bo'lsa
      res[element]++  // uni 1 ga oshirib qoyamiz
    }
  })
  return res  // res ni return qilamiz
}

module.exports = getFrequencies;
