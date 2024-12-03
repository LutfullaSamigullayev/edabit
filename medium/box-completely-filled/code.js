function completelyFilled(arr) {
  // Your code here.
  if(arr.length > 2) { // oldin ar ni uzunligi 2 da kattaligini tekshiramiz
    arr.pop() // uning oldingi elementini olib tashlaymiz
    arr.shift()   // va oxirgi elementini ham olib tashlaymiz
    let arrLength = arr.length  // qolgan uzinligini aniqlab olamiz
    let star = 0    // yulduzchalarni hisoblab borish uchun o'zgaruvchi ochamiz
    let res = 0 // bu yerda yulduzchalari to'liq bo'lgan qatorni hisoblab boramiz
    arr.map((str) => {  // arr ni map qilamiz
      str.split('').map((symbol) => { // har bir kelgan str ni split qilib bo'laklarga bo'lamiz
        if(symbol === '*'){   // keyin uni ham map qilib har bir symbol ni '*' ekanligini tekshiramiz
          star++  // agar yulduzcha bo'lsa star ni 1 ga oshirib boramiz
        } 
      })
      if(arrLength === star) { // keyin bu qatordai yulduzchalar to'liqligini tekshiramiz
        res++ // to'liq bo'lsa res ga 1 oshiramiz 1 qator to'liq ekanligi belgilandi 
        star = 0 // starni yana 0 qilib qo'yamiz 
      } // keyin yangi qatorni yana split qilib tekshiradi
    })  // shu tarzda barcha qatorlarni tekshirib chiqadi
    return arrLength === res  // oxirida barcha qatorlardagi yulduzchalar to'liq bo'lgan bo'lsa true qaytaramiz
  } else return true  // bu yerda agar arr uzunligi 2 va undan kichik bo'lsa true qaytaramiz
} 

module.exports = completelyFilled;
