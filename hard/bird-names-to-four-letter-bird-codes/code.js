function birdCode(arr) {
  // Your code here.
  return arr.map(str => { 
    // arr ni map qilib har bir qushlar nomini tekshirib chiqamiz
    let bird = '' // bu yerga qush nomining qisqartirilgan shaklini saqlaymiz
    const newarr = str.split(/[- ]/) // qushning to'liq nomini bo'laklarga bo'lamiz
    switch (newarr.length) { // nomining uzunligiga qarab uni ustida amallar bajaramiz
      case 1: // agar uzunligi 1 ga teng bo'lsa yani qushning nomi 1 so'zdan iborat bo'lsa
        bird = newarr[0].slice(0,4) // uning oldingi 4 ta harfini olamiz
        break // va shu yerda ishni yakunlaymiz
      case 2: // agar 2 ga teng bo'lsa har bir so'zning oldingi 2 ta farfini olamiz
        newarr.forEach(e => bird += e.slice(0,2)) // va ularni bird ga qo'shamiz
        break // va shu yerda ishni yakunlaymiz
      case 3: // agar 3 ga teng bo'lsa
        bird += newarr[0].slice(0,1) // 1-so'zning 1-harfini olib birdga saqlaymiz
        bird += newarr[1].slice(0,1) // 2-so'zning 1-harfini olib birdga saqlaymiz
        bird += newarr[2].slice(0,2) // 3-so'zning oldingi 2 ta harfini birdga saqlaymiz
        break // va shu yerda ishni yakunlaymiz
      case 4: // agar 4 ga teng bo'lsa har birining 1-harfini olib birdga qo'shamiz
        newarr.forEach(e => bird += e.slice(0,1))
        break // va shu yerda ishni yakunlaymiz
    }
    return bird.toUpperCase() // va bird ni katta harf qilib return qilamiz
  }) // va barchasini bir massivda return qilamiz
}

module.exports = birdCode;
