function billSplit(spicy, cost) {
  // Your code here.
  let your = 0 // bu yerga sizning hisobingizni qo'shib boramiz
  let friend = 0 // bu yerga esa dostingizning hisobini qo'shib boramiz
  spicy.forEach((word, index) => {
    // spicy ni forEach qilib har bir elementni tekshiramiz
    if(word === 'S') { // agar word 'S' ga teng bo'lsa 
      your += cost[index] 
      // cost ning shu index da joylashgan raqamni your ga qo'shamiz
    } else { 
      // aksa holda word 'N' ga teng bo'lsa cost ning shu index da joylashgan raqamni
      your += cost[index] / 2  // yarimini your ga qo'shamiz
      friend += cost[index] / 2  // yarimini friend ga qo'shamiz
    } 
  }) // va hisoblarni array shaklida return qilamiz
  return [your, friend]
}

module.exports = billSplit;
