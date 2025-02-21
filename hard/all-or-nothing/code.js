function possiblyPerfect(key, answers) {
  // Your code here.
  let right = 0 // bu yerga to'g'ri javoblarni sonini hisoblab boramiz
  let wrong = 0 // bu yerga esa noto'g'ri javoblar sonini hisoblab boramiz
  key.forEach((word, index) => { 
    // key ni forEach qilib har bir javobni tekshirib chiqamiz
    if(word === '_') { // agar word '_' ga teng bo'lsa
      right++ // right ni ham oshiramiz
      wrong++ // wrong ni ham oshiramiz
    } else if(word === answers[index]) {
     // agar word answerning shu index da joylashgan javobi bilan bir xil bo'lsa
      right ++ // right ni 1 ga oshiramiz
    } else { // aks holda javob noto'g'ri bo'lsa
      wrong++ // wrongni 1 ga oshiramiz
    }
  })
  if(right === answers.length || wrong === answers.length) {
    // right yoki wrong answerning uzunligiga teng bo'lsa 
    return true // true ni return qilamiz
  } else { // aks holda 
    return false // false ni return qilamiz
  }
}

module.exports = possiblyPerfect;
