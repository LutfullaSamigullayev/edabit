function convertDate(date) {
  // Your code here.
  const newDate = new Date(date) 
  //new Date orqali date ni objectga aylantiramiz
  const year = newDate.getFullYear() 
  //getFullYear orqali yilni olishimiz mumkin
  const month = newDate.getMonth() + 1 
  //getMonth orqali oy ni olishimiz mumkin, lekin 0 dan boshlanadi, shuning uchun +1 qo'shamiz
  const day = newDate.getDate() 
  //getDate orqali kuni olishimiz mumkin
  return [month, day, year] 
  // natijani shunday formatda qaytarib beramiz
}

module.exports = convertDate;
