function convertTime(time) {
  // Your code here.
  let res = ''
  let arr = time.split(" "); // time ni bo'sh joy orqali bo'laklarga bo'lamiz
  if (arr.length === 2) { // agar arr ning uzunligi 2 ga teng bo'lsa
    let [time, str] = arr; // arr ni time va str ga bo'lamiz
    let [hour, minute] = time.split(":"); 
    // time ni ham hour va minute ga bo'lamiz bo'lamiz
    hour = +hour + 12; // hour ga 12 ni qo'shamiz
    if (str === "am" && hour === 24) { 
      // agar str 'am' ga teng bo'lsa va hour 24 bo'lgan bo'lsa
        hour = "0"; // uni 0 qilib qo'yamiz
    } // va res ga hour va minute ni qo'shamiz
    res = hour + ":" + minute 
  } else { // aks holda arr length 1 ga teng bo'lsa
    let [hour, minute] = arr[0].split(":"); // uni hour va minutega bo'lamiz
    if (+hour > 12) { // agar hour 12 dan katta bo'lsa 
      hour = +hour - 12; // hourdan 12 ni ayiramiz
      res = hour + ":" + minute + " pm" // va res ga hour, minute va 'pm' ni qo'shamiz
    } else { // aks holda ularni o'zgarish siz qoldirib shukcha 'am' qo'shib qo'yamiz
      res = hour + ":" + minute + " am"
    }
  }
  return res // res ni return qilamiz
}

module.exports = convertTime;
