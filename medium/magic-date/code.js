function Magic(str) {
  // Your code here.
  const arr = str.split(' ') // str ni  ' ' joy orqali bo'laklarga bo'lib olamiz
  const summ = arr[0] * arr[1]  // keyin arr ning kun va oy ni ko'payriamiz
  if(arr[2] % 10 === summ || arr[2] % 100 === summ || arr[2] % 1000 === summ ) {
    // agar ko'paytma yilning songi 1, 2 yoki 3 raqamiga teng bo'lsa
    return true // magic date ga mos keladi va true qaytaramiz
  } else {
    return false // aks holda false qaytaramiz
  }
}

module.exports = Magic;
