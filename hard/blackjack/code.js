function overTwentyOne(args) {
  // Your code here.
  const ten = ["J", "Q", "K"] // bular 10 ga teng bo'lgan kartalar
  // let ace = false // agar A kartasi borligini aniqlaymiz
  let res = 0 // bu yerda barcha kartalarni hisoblab boramiz
  args.forEach(card => { // args ni forEach qilib har birini tekshirib chiqamiz
    if(ten.includes(card)) { // agar karta harfli bo'lsa va u array ni ichida bo'lsa
      res += 10 // bu karta 10 ga teng shuning uchun res ga 10 ni qo'shamiz
    } else if(card === 'A') { // agar karta A bo'lsa
      // ace = true // ace ni true qilib qo'yamiz
      res += 1 // va res ga 1 ni qo'shamiz
    } else { // aks holda karta raqam bo'lsa
      res += card // uni o'zini res ga qo'shib qo'yamiz
    }
  })
  // if(ace && res + 10 > 21) { 
  // // agar kartalar ichida A bo'lsa va res ga 10 ni qo'shsa 21 dan katta bo'ladigan bo'lsa
  //   res += 10 // res ga 10 ni qo'shamiz
  // }
  return res > 21 // res 21 katta yoki yo'qligini return qilamiz
}

module.exports = overTwentyOne;
