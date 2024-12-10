function textToNumberBinary(str) {
  const words = str.toLowerCase().split(' ');
  // oldin str ni kichik harflarga aylantirib uni bo'sh joylar orqali bo'laklarga bo'lib chiqamiz
  let res = ''; // bu yerda jovoblarni saqlab boramiz
  for (let word of words) { // keyin for qilib har birini tekshirib chiqamiz
    if (word === 'zero') {  // agar word zero ga teng bo'lsa
      res += '0'; // res ga 0 ni string qilib qo'shamiz
    } else if (word === 'one') { // aks holda word noe ga teng bo'lsa
      res += '1'; //res ga 1 ni string qilib qo'shamiz
    } // aks holda hechnima qo'shilmaydi
  }
  const length = res.length; // javob tayyor bo'lganidan keyin uning uzunligini tekshiramiz
  if (length % 8 !== 0) { // uni 8 karrali ekanligini aniqlaymiz agar uni 8 ga bo'lganda qoldiq qolsa
    res = res.slice(0, length - (length % 8));  // qolgan qoldiqni res ning oziridan kesib tashlaymiz
  } // agar uzunlik 8 dan kichik bo'lsa uni uzunlikning o'zi qaytadi va barcha uzunliki kesib tashlanidi
  return res; // keyin natijani return qilamiz
}
console.log(2%8)
module.exports = textToNumberBinary;
