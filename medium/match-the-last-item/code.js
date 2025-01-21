function matchLastItem(arr) {
  // Your code here.
  let res = '' // bu yerda oxirgi elementdan boshqa barcha elementlarni qo'shib boramiz
  arr.forEach((word, index) => {  // arr ni forEach qilib chiqamiz
    if(!(arr.length-1 === index)) { // agar oxirgi element bo'lmasa 
      res += word // res ga wordni qo'shamiz
    } 
  })// agar res arr ni oxirgi elementiga mos bo'lsa true aks holda false qaytaradi
  return arr[arr.length-1] === res 
}

module.exports = matchLastItem;
