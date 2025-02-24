function averageWordLength(str) {
  // Your code here.
  let res = 0 // bu yerga so'zlarning uzunligini qo'shib boramiz
  let words = str.replace(/[^\w\s]/g, "") // str dan tinish belgilarini olib tashlaymiz
  let arr = words.split(' ') // keyin uni so'zlarga bo'lib chiqamiz
  arr.forEach(word => res+= word.length) // har bir so'zning uzunligini res ga qo'shamiz
  return Number((res/arr.length).toFixed(2)) // natijani so'zlarning soniga bo'lib, 
  // 2 ta kasrgacha yaxlitlab, Number ga o'tkazib return qilamiz
}

console.log(averageWordLength("Dude, this is so awesome!"))
module.exports = averageWordLength;
