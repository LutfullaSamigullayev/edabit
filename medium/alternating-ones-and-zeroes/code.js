function canAlternate(s) {
  // Your code here.
  let zero = 0  // '0' ni hisoblash uchun 
  let one = 0   // '1' ni hisoblash uchun 
  s.split('').map((e) => {  // s ni split qilib bo'laklarga bo'lib map qilamiz
    if(+e === 0) {          // e ni number qilib uni 0 ga tengligini tekshiramiz
      zero++                // agar 0 ga teng bo'lsa 
    } else {                // zero ni 1 ga oshiramiz
      one++                 // aks holda 1 ga teng bo'ladi
    }                       // va one ni 1 ga oshiramiz
  })
  if(zero === one || (zero + 1) === one || zero === (one + 1)) {
    return true           // keyin zero va one orasidagi farq 1 dan ko'p bo'lmasa
  } else {                // yoki ular teng bo'lsa true qaytaramiz
    return false          // aks holda false qaytaramiz
  }
}

module.exports = canAlternate;
