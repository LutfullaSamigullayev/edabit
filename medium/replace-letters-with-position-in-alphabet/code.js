function alphabetIndex(str) {
  // Your code here.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // alfavitni yaratamiz
  let result = ''; //bu yerga javobni saqlaymiz
  for (let i = 0; i < str.length; i++) { //str ni har bir elementini tekshiramiz
    let char = str[i].toLowerCase(); //har bir elementni kichik harf qilamiz
    if (alphabet.includes(char)) { //agar harf alfavitda bo'lsa
      result += alphabet.indexOf(char) + 1 + ' '; 
    } //harfni indexiga 1 ni va ' ' bo'sh joy qo'shib result ga qo'shamiz
  }
  return result.trim(); // result ni trim qilib oxiridagi ' ' bo'sh joyni olib tashlaymiz
} // return qilamiz

module.exports = alphabetIndex;
