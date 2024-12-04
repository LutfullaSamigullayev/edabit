function subset(arr1, arr2) {
  // Your code here.
  return arr1.every((e) => arr2.includes(e)) 
  // every har doim true bo'lsa yana ishlaydi biz arr1 dagi raqamlarni arr2 dan qidiramiz
  // agar barchasi topilsa true qaytaramiz
  // qaysidir birsi topilmay qolsa shu yerda ish to'xtab false qaytadi
}

module.exports = subset;
