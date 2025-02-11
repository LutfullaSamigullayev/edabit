function splitAndDelimit(str, num, del) {
  // Your code here.
  let res = '' // bu yerga javoblarni saqlab boramiz
  let count = 0 // bu yerda for necha marta ishlaganini hisoblab boramiz
  for(let i = 0; i < str.length; i++) { // str ning uzunligi bo'yicha for qilamiz
    res += str[i] // res ga str ning i-elementini qo'shamiz
    count ++ // va count ni 1 ga oshiramiz
    if(count === num && i+1 < str.length) { 
      // agar count num ga teng bo'lsa va element oxirgi element bo'lmasa
      res += del // res ga del ni qo'shamiz
      count = 0 // va count ni 0 ga aylantiramiz
    }
  } // va res ni return qilamiz
  return res
}

module.exports = splitAndDelimit;
