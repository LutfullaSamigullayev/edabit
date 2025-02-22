function allPairs(arr, target) {
  // Your code here.
  const res = []; // bu yerga javoblarni push qilib boramiz
  const numbers = []; // bu yerga esa ishlatilgan sonlarni saqlab boramiz
  arr.forEach((num1, index) => { // arr ni forEach qilib har birini tekshirib chiqamiz
    if (!numbers.includes(num1)) { // agar num1 numbers ichidan topilmasa
      const num2 = target - num1; // targetdan num1 ni ayirib num2 ni topib olamiz
      const findnum = arr.find((num, i) => { // arr ichidan num2 ni qidiramiz
        if (i !== index) { // agar joylashuvlar bir xil bo'lmasa
         return num === num2; // num2 ga mos keladigan raqamni qidiramiz
        } // agar topilsa o'sha raqamni o'ini return qilamiz
      }); // aks holda undefined ni return qiladi
      if (findnum !== undefined) { // agar raqam topilgan bo'lsa
        res.push([num1, num2].sort()); 
        // num1 va num2 ni massiv shaklida sort qilib res ga push qilamiz
        numbers.push(num1, num2); // va numbers ga ham push qilib ketamiz
      }
    }
  }); // res ni sort qilib 0-index bo'yicha tartiblab return qilamiz
  return res.sort((a, b) => a[0] - b[0]); 
}

module.exports = allPairs;
