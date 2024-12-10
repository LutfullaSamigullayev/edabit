function duplicateCount(str) {
  // Your code here.
  let word = '' // bu yerga dublikat bo'lgan harflarni saqlab boramiz
  str.split('').forEach((element, index, arr) => {
    // str ni split qilib bo'laklarga bo'lib for each qiliamiz
    if(!word.includes(element)) { 
      // agar element allaqachon dublikat bo'lgan bo'lsa uni for qilib o'tirmaymiz
      for(let i = index+1; i < arr.length; i++) {
        //aks holda uni kelgan joyining keyingi elementidan boshlab qidirib boshlaymiz
        if(!word.includes(element) && element === arr[i]) {
          // u 2 ta shartni bajarsa wordga qo'shamiz 
          // word da bo'lmasligi kerak va element arr[i] indexda turgan elementda teng bo'lishi kerak
          word+= element // shunda uni word ga qo'shib qo'yamiz
        }
      }
    }
  })
  return word.length // keyin dublikat bo'lgan harflarning uzunligini qaytaramiz
}

module.exports = duplicateCount;
