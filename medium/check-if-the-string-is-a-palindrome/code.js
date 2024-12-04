function isPalindrome(str) {
  // Your code here.
  let newstr = str.toLowerCase().replace(/[ ,!-]/g, '')
  // str ni kichik harflarga aylantirib undagi ortiqcha belgilarni olib tashlaymiz
  let str1 = newstr.slice(0, Math.round(newstr.length/2))
  // satrning yarimini qirqib olamiz
  let str2 = newstr.split('').reverse().join('').slice(0, Math.round(newstr.length/2))
  // keyin satrni bo'laklarga bo'lib teskarisiga aylantirib yana qo'shib, uning ham yarimini olamiz
  return str1 === str2 // agar str1 va str2 bir xil bo'lsa true qaytaradi aks holda false qaytaradi
}

module.exports = isPalindrome;
