function letterCounter(arr, letter) {
  // Your code here.
  let summ = 0 // bu yerga javoblarni qo'shib boramiz
  arr.forEach(arr => {  // oldin katta arr ni forEach qilamiz keyin uni ichidagi
    arr.forEach((e) => e === letter ? summ++ : null) // arr ni forEach qilamiz
  }); // e === letter true bo'lsa summ ni 1 ga oshiramiz aks hooloda hechnima qilinmaydi
  return summ // summ ni return qilamiz
}

module.exports = letterCounter;
