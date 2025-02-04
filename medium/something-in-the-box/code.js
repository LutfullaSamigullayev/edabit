function inBox(arr) {
  // Your code here.
  return arr.join('').includes('*') 
  // join orqali arr ni barcha elementlarini birlashtirib string qilamiz
  // va includes orqali ichidan '*'-yulduzchani qidiramiz
  // agar topilsa true aks holda false qataradi
}

module.exports = inBox;
