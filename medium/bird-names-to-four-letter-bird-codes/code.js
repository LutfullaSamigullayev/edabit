function birdCode(arr) {
  // Your code here.
  let res = []  // natijalarni saqalb borish uchun res ochamiz
  arr.map((str) => {  //keyin arr ni map qilamiz
    let word = '' // bu yerda so'zni saqlash uchun o'zgaruvchi ochamiz
    let newarr = str.split(/[- ]/)  // har bir kelgan str ni split qilib ' '-bo'sh joy va '-'-chiziqcha lar orqali bo'laklarga bo'lamiz
    if(newarr.length === 1) { // agar tayyor bo'lgan newarr ning uzunligi 1 ga teng bo'lsa 
      word = newarr[0].slice(0, 4)  // uning 0-indexidagi satrni 4 ta harfini qirqib olib word ga joylashtiramiz
    } else if(newarr.length === 2) { // agar tayyor bo'lgan newarr ning uzunligi 2 ga teng bo'lsa
      word = newarr[0].slice(0, 2)  // uning 0-indexidagi satrni 2 ta harfini qirqib olib word ga joylashtiramiz
      word += newarr[1].slice(0, 2) // va 1-indexidagi satrni 2 ta harfini qirqib olib word ga qo'shib qo'yamiz
    } else if(newarr.length === 3) { // agar tayyor bo'lgan newarr ning uzunligi 3 ga teng bo'lsa
      word = newarr[0].slice(0, 1) // uning 0-indexidagi satrni 1 ta harfini qirqib olib word ga joylashtiramiz
      word += newarr[1].slice(0, 1) //  1-indexidagi satrni ham 1 ta harfini qirqib olib word ga qo'shamiz
      word += newarr[2].slice(0, 2) // va 2-indexidagi satrni 2 ta harfini qirqib olib word ga qo'shib qo'yamiz
    } else if(newarr.length === 4) { // agar tayyor bo'lgan newarr ning uzunligi 4 ga teng bo'lsa
      word = newarr[0].slice(0, 1) // uning 0-indexidagi satrni 1 ta harfini qirqib olib word ga joylashtiramiz
      word += newarr[1].slice(0, 1) //  1-indexidagi satrni ham 1 ta harfini qirqib olib word ga qo'shamiz
      word += newarr[2].slice(0, 1) //  2-indexidagi satrni ham 1 ta harfini qirqib olib word ga qo'shamiz
      word += newarr[3].slice(0, 1) //  3-indexidagi satrni ham 1 ta harfini qirqib olib word ga  qo'shib qo'yamiz
    } // keyin tayyor bo'lgan wordni katta harf qilib res ga push qilamiz
    res.push(word.toLocaleUpperCase()) 
  }) // res ni return qilamiz
  return res
}

module.exports = birdCode;

// console.log(birdCode(["Black-Capped Chickadee", "Common Tern"]))