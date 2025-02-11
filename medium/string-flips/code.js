function flip(str, spec) {
  // Your code here.
  if(spec === 'sentence') { // agar spec "sentence" ga teng bo'lsa
    return str.split(' ').reverse().join(' ')
    // str ni so'zlarga bo'lib hosil bo'lgan massivni teskarisiga aylantirib
    // join orqali birlashtirib string qilib return qilamiz
  } else { // aks holda spec "word" ga teng bo'lsa 
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    // str ni so'zlarga bo'lib map qilib har bir so'zni harflarga bo'lib 
    // harflardan hosil bo'lgan massivni teskarisiga aylantirib 
    // yana birlashtirib teskari so'zlardan hosil bo'lgan array chiqadi
    // array ni ham join orqali birlashtirib string sifatida return qilamiz
  }
}

module.exports = flip;
