function questionMarks(str) {
  // Your code here.

  if(!str) { // agar str bo'lmasa
    return false // false ni return qilamiz
  }

  // bu funksiyada strni oldingi yoki oxirgi raqamini olib beradi
  function getNumber(str, position) { // str ga satr beriladi
    // positionga esa start bersa strning oldingi raqamini qaytaradi
    // boshqa narsa yoki hechnima berilmasa oxirgi raqamni qaytaradi
    let regex = position === "start" ? /^-?\d+/ : /-?\d+$/;
    let match = str.match(regex); // natijani match ga saqlaymiz
    return match ? Number(match[0]) : null; 
    // agar raqam topilgan bo'lsa raqamni aks holda null qaytaramiz
  }
  
  const newarr = str.split('???') // str ni "???" bo'yicha bo'laklarga bo'lib chiqamiz

  return newarr.every((word, index, arr) => { // newarr ni every qilib tekshirib chiqamiz
    if(index === arr.length - 1) { // agar word oxirgi so'z bo'lsa 
      return true // true ni return qilamiz
    }
    let str = arr[index+1] // keyingi keladigan so'zni str ga saqlab qo'yamiz
    const end = getNumber(word) // wordni oxirgi raqamini olamiz
    const start = getNumber(str, 'start') // str ni boshidagi raqamini olamiz
    // va ularning yig'indisi 10 teng ekanligini tekshirib natijani return qilamiz
    return ((end === 0 ? 0 : end ? end : start) + (start ? start : end)) === 10
  })
  
}

module.exports = questionMarks;
