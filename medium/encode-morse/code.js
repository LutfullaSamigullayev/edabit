function encodeMorse(str) {
  // Your code here.
  // Barcha harflar, raqamlar va maxsus belgilar uchun Morse kodlarini o'z ichiga olgan JavaScript obyekti:
  const morseCode = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
    K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
    U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
  
    0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 
    8: '---..', 9: '----.',
  
    '!': '-.-.--', ',': '--..--', '.': '.-.-.-', '?': '..--..', ':': '---...', ';': '-.-.-.', '"': '.-..-.',
    "'": '.----.', '-': '-....-', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', '$': '...-..-', 
    '@': '.--.-.', ' ': '  '  // Bo'sh joy (3 bo'sh joy bilan ajratilgan)
  };
  let res = ''    // bu yerga morse alifbosi bo'yicha javoblarni saqlab boramiz
  for(let i = 0; i < str.length; i++) { // keyin stringni foq qilib chiqamiz
    res += morseCode[str[i].toUpperCase()]  // kelgan harfni morseCode ning obyektidan shu kalitidagi qiymatni res ga qo'shib boramiz
    if(i+1 !== str.length && str[i] !== ' ') {  // agar str ning oxiriga va bo'sh joyda kelgan bo'lsa
      res += ' '  // res ga bo'sh joy qo'shmaymiz aks holda bosh joy qo'shib boramiz
    }
  }
  return res
}

module.exports = encodeMorse;
