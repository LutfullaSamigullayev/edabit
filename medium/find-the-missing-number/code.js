function missingNum(arr) {
  // Your code here.
  let res = 1 // bu yerda javobni saqlab boramiz
  arr.sort((a,b) => a-b).every((num, index, newarr) => {
    // keyin arr ni sortlab, every qilib tekshiramiz
    if(newarr[0] !== 1) { // agar birinchi element 1 ga teng bo'lmasa 
      return false  // shu yerda ishni to'xtatib 1 ni qaytarib qo'yamiz
    } // keyin test o'zgaruvchi yaratib kelgan num ni o'zidan oldingisi bilan tekshiramiz
    let test = num + 1 === newarr[index + 1] 
    if(!test){ // agar test true bo'lsa
      res = num + 1 // res ga num ni o'zlashtirib qo'yamiz
    }
    return test // every - agar true qaytsa qaytsa ishlaydi 
  })  // agar false qaytsa shu yeda ishini tugatadi
  return res  // va res ga o'zlashtirilgan num ni qaytaradi
}

module.exports = missingNum;
