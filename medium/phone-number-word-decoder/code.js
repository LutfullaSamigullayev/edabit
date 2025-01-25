function textToNum(phone) {
  // Your code here.
  const phoneKeyPad = {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"]
  }; // Telefon raqamlari va harflar

  // Harfni topish uchun funksiyasi
  function findKeyForLetter(obj, letter) { // Obyekt va harf qabul qiladi
    // Obyektdan kalit va qiymatlarni ajratamiz
    const entry = Object.entries(obj).find(([key, value]) => 
      value.includes(letter.toUpperCase()) // Harfni qiymatlar ichida qidiramiz
    );
    return entry ? entry[0] : null; // Agar topilsa, kalitni qaytaradi, topilmasa null
  }

  const phoneFormat = '(123)-456-7890' // Telefon raqamlari formati
  let res = '' // Natija uchun bo'sh string

  const arr = phone.split('').forEach(num => { // Har bir raqamni tekshiramiz
    if(phoneFormat.includes(num)) { // Agar formatda bo'lsa 
      res += num  // num ni res ga qo'shamiz
    } else {  // Aks holda 
      const findNum = findKeyForLetter(phoneKeyPad, num) 
      // funksiyani chaqiramiz va kelgan harfni obyektan topib uning kalitini qaytaramiz
      res += findNum  // topilgan raqamni res ga qo'shamiz
    } 
  }); 
  
  return res // res ni return qilamiz

}

module.exports = textToNum;
