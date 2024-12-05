function split(word) {
  // Your code here.
  const vowels = 'aeiou' // bu yerda unli harflarni saqlab qo'yamiz
  let res = []  // bu yerga javoblarni saqlab boramiz
  let vowel = ''  // bu yerda 
  const arr = word.toLowerCase().split('') // wordni kichik harfga aylantirin bo'laklarga bo'lamiz
  arr.forEach((e) => {  // keyin arr ustida amallarni bajaramiz
    if(vowels.includes(e)) {  //agar kelgan harf unli harf bo'lsa
      vowel += e  // uni vowel ga qo'shib boramiz
    } else if(vowel != '') {  //kelgan harf unli bo'lmasa va vowel bo'sh bo'lmasa
        res.push(vowel) // vowelni res ga push qilib 
        vowel = ''  // keyin vowelni bo'sh qilib qo'yamiz 
        res.push(e) // va kelgan unli bo'lmagan harfni ham izidan push qilib  boramiz
      } else {  // agar helgan harf unli bo'lmasa va vowel ham bo'sh bo'lsa
        res.push(e) // to'gridan to'g'ri e ni res ga push qilib yuboramiz
      } 
    }
  ) // oxirida unli harf bilan yakunlanib qolsa u res ga push bo'lmay vowelda qolib ketadi
  if(vowel != '') {     //  shuning uchun vowel bo'sh bo'lmasa
    res.push(vowel) // uni res ga push qilib yuboramiz
  }
  return res  // keyin natijani qaytaramiz
}

module.exports = split;
