function reverse(str) {
  // Your code here.
  const arr = str.split(' ') // str ni split qilib so'zlarga bo'lib olamiz
  const res = arr.map(word => { // hosil bo'lgan arr ni map qilib chiqamiz
    if(word.length > 4) { // agar kelgan so'zning uzunligi 4 dan katta bo'lsa
      return word.split('').reverse().join('')
      // uni teskari qilib return qilamiz
    } else { // aks holda
      return word // so'zni o'zini qaytaramiz
    }
  })
  return res.join(' ') // javoblarni qo'shib string sifatida return qilamiz
}

module.exports = reverse;
