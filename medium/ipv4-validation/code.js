function isValidIP(str) {
  // Your code here.
  const arr = str.split('.') // str ni "." lar orqali bo'laklarga bo'lib olamiz
  if(arr.length != 4) { // hosil bo'lgan arr uzunligi 4 ga teng bo'lmasa 
    return false  // bu IPv4 ga mos kelmaydi va false qaytaramiz
  }
  // const regex = /^\d+$/;
  //   Bu yerda:
  // ^ – satrning boshlanishi.
  // \d+ – bir yoki bir nechta raqam.
  // $ – satrning tugashi.


  const regex2 = /^(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  // Bu regex nima qiladi:
  // ^(?:...)$ – satrni boshidan oxirigacha tekshiradi.
  // [0-9] – 0 dan 9 gacha bo'lgan raqamlarni qamrab oladi (ya'ni 0).
  // [1-9][0-9] – 10 dan 99 gacha bo'lgan sonlar.
  // 1[0-9]{2} – 100 dan 199 gacha bo'lgan sonlar.
  // 2[0-4][0-9] – 200 dan 249 gacha bo'lgan sonlar.
  // 25[0-5] – 250 dan 255 gacha bo'lgan sonlar.

  return arr.every((num) => { // arr every qilib har bir raqamni tekshiramiz
    if(regex2.test(num)) { // agar num 0-255 oraliqdagi son bo'lsa
      return true // true qaytarmiz 
    } 
  }); // barcha sonlar to'g'ri bo'lsa true qaytadi aks holda false
}

module.exports = isValidIP;
