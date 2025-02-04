function sevenAte9(str) {
  // Your code here.
  let res = ""; // bu yerga javoblarni saqlab boramiz
  for (let i = 0; i < str.length; i++) { // str ni uzunligi bo'yicha tekshiramiz
    if (str[i] == 9 && str[i - 1] == 7 && str.length - 1 !== i) {
      // agar kelgan element 9 bo'lsa va undan oldingi element 7 bo'lsa va u oxirgi element bo'lmasa
      if (str[i + 1] == 7) { // undan keyin tekshiradiganimiz, keyingi element 7 bo'lsa
        // shu yerda ish tugaydi uni res ga qo'shmaymiz
      } else if (str[i + 1] === " " && str[i + 2] == 7) {
        // ask holda undan keyingi element ' '-bo'sh joy bo'lsa
        // va bo'sh joydan keyin 7 bo'lsa unda ham element ni res ga qo'shmaymiz 
      } else { // aks holda bu shartlarni bajarmasa
        res += str[i]; // 9 ni res ga qo'shamiz 
      }
    } else { // agar u oxirgi elemnent bo'lsa yoki 9 ga teng bo'lmasa
      res += str[i]; // uni res ga qo'shamiz
    }
  }
  return res; // res ni return qilamiz
}

module.exports = sevenAte9;
