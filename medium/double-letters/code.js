function doubleLetters(word) {
  // Your code here.
  let arr = word.split('')  // wordni bo'laklarga bo'lib arr hosil qilib olamiz
  for(let i = 0; i < arr.length; i++) { // keyin o'sha arr ni for qilib  
    if(arr[i] === arr[i+1]){    // kelgan harf o'zidan oldingi harfga teng bo'lsa 
      return true     // true qaytaramiz
    }
  }
  return false    // aks ho'lsa hech qarsi biri teng bo'lmasa false qaytaramiz
}

module.exports = doubleLetters;
