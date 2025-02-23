function isCorrectAliases(names, aliases) {
  // Your code here.
  return aliases.every((str, index) => { 
    // aliases ni every qilib har bir ism va familyani tekshirib chiqamiz
    return str.split(' ').every(word => { 
      // va ism va familyalarni bo'laklarga bo'lib har birini tekshirib chiqamiz
      return word[0] === names[index][0] 
      // ism va familyalarning 1-harfi names ning shu o'rinda joylashgan ism ning 1-harfi bilan mos kelishini tekshiramiz
    }) // agar barchasi mos kelsa true aks holda false ni return qilamiz
  })
}

module.exports = isCorrectAliases;
