function isAnagram(s1, s2) {
  let str1 = s1.toLowerCase().replace(/\s/g, '').split('').sort().join('')
  let str2 = s2.toLowerCase().replace(/\s/g, '').split('').sort().join('')
  // barcha harflarni kichik qilamiz keyin bosh joylarni olib tashlaymiz
  // keyin bo'laklarga bo'lib sortlab yana birlahstirib qo'yamiz
  return  str1 === str2 // agar ular bir xil bo'lsa true aks holda false qaytadi
}

module.exports = isAnagram;
