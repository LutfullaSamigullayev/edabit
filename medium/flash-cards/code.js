function flash([num1, op, num2]) {
  // Your code here.
  let res // bu yerga javob ni saqlaymiz
  switch (op) { // bu yerda biz op ni tekshiramiz
    case "+" : res = num1 + num2; break // agar + bo'lsa uni qo'shamiz
    case "-" : res = num1 - num2; break // agar - bo'lsa uni ayiramiz
    case "x" : res = num1 * num2; break // agar x bo'lsa uni ko'paytiramiz
    case "/" : res = num1 / num2;  // agar / bo'lsa uni bo'lamiz
     if(res === Infinity || res.toString() == "NaN" ) {
      // bo'lganimizdan keyin natija cheksiz bo'lsa yo'ki bo'linmasa 
      res = undefined // undifined qaytaramiz
     };
     if(!Number.isInteger(res) && String(res - Math.floor(res)).length > 3) {
      // agar raqam kasr son bo'lsa va kasr qismi 2 ta dan ko'p bo'lsa
      res = parseFloat(res.toFixed(2)); // uni 2 xonali kasrgacha yaxlitlaymiz
     };
     break
  }
  return res // res ni return qilamiz

}

module.exports = flash;
