function counterpartCharCode(char) {
  // Your code here.
  if(char.toLocaleLowerCase() === char) {
    // agar harf uning kichiraytirilganiga teng bo'lsa demak u kichik harf
   return char.toUpperCase().charCodeAt(0)
   // shunda uni katta harf qilib codini return qilamiz
  } else {
    return char.toLowerCase().charCodeAt(0)
    // aks holda uni kichik harf qilib kodini qaytaramiz
  } 
}

module.exports = counterpartCharCode;
