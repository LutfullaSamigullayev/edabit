function threeDaysAgo(date) {
  // Your code here.
  let newDate = date // date ni newDate ga o'zlashtiramiz
  newDate.setDate(newDate.getDate() - 3) // newDate ni 3 kun oldinga o'zlashtiramiz
  const year = newDate.getFullYear() // yilni olishimiz mumkin
  const month = newDate.getMonth() + 1 // oy ni olishimiz mumkin, lekin 0 dan boshlanadi, shuning uchun +1 qo'shamiz
  const month2 = month < 10 ? `0${month}` : month // agar oy 10 dan kichik bo'lsa oldingiga 0 qo'shamiz
  const day = newDate.getDate()  // kuni olishimiz mumkin
  const day2 = day < 10 ? `0${day}` : day // agar kun 10 dan kichik bo'lsa oldingiga 0 qo'shamiz
  return `${year}-${month2}-${day2}`// natijani shunday formatda qaytarib beramiz
}

module.exports = threeDaysAgo;
