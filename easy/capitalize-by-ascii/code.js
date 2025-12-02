function asciiCapitalize(str) {
  // Your code here.
  let result = "";
  // Natijani yig'ish uchun bo'sh string

  for (let i = 0; i < str.length; i++) {
    // Har bir belgini navbatma-navbat olamiz
    const char = str[i];
    const code = char.charCodeAt(0);
    // Belgining ASCII kodini aniqlaymiz

    if (code % 2 === 0) {
      // Agar ASCII kodi juft bo'lsa
      result += char.toUpperCase();
      // Katta harfga o'tkazamiz
    } else {
      // Agar ASCII kodi toq bo'lsa
      result += char.toLowerCase();
      // Kichik harfga o'tkazamiz
    }
  }

  // Yakuniy stringni return qilamiz
  return result;
}

module.exports = asciiCapitalize;
