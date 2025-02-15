function trouble(num1, num2) {
  // Your code here.
  // funksiya yaratib olamiz takrorlanuvchi raqamlar massivini qaytaradigan
  function repeatNums(numbers, count) { 
    // numbers ga raqam keladi count ga ketma-ketligi qancha bo'lishi beriladi
  let repeat = '' // takrorlangan raqamlarni string ko'rinishida saqlaymiz
  const res = [] // bu yerga javoblarni push qilib boramiz
  numbers.toString().split('').forEach(num => {
    // numbers ni string ga aylantirib split qilib bo'laklarga bo'lamiz
      if(repeat.length === 0) { // agar repeat bo'sh bo'lsa 
        repeat += num // num ni repeat ga qo'shamiz
        } else if(repeat[0] == num) { 
          // agar repeatning 1-elementi num ga teng bo'lsa
          repeat += num // num ni repeat ga qo'shamiz
        } else { // aks holda
          repeat = '' // repeatni tozalab yuborib 
          repeat += num // num ni repeat ga qo'shamiz
        }
      if(repeat.length === count) { 
        // agar repeatning uzunligi count ga teng bo'lsa
        res.push(Number(repeat.slice(0,2))) 
        // uni 2 tasini raqamga aylantirib res ga push qilamiz
        }
    })
    return res // va res ni return qilamiz
  }

  const repeatNum1 = repeatNums(num1, 3) 
  // repeatNums funksiyaga num1 ni 3 marta ketma-ket takrorlangan
  // raqamni topish uchun berib yuboramiz
  // va hosil bo'lgan arrayni repeatNum1 ga saqlaymiz

  const repeatNum2 = repeatNums(num2, 2)
  // repeatNums funksiyaga num2 ni 2 marta ketma-ket takrorlangan
  // raqamni topish uchun berib yuboramiz
  // va hosil bo'lgan arrayni repeatNum2 ga saqlaymiz

  const repeats = repeatNum1.filter(num => repeatNum2.includes(num))
  // ikkalasida ham borlarni filterlab yangi arrayga joylaymiz

  return repeats.length ? true : false
  // agar array ichida son bo'lsa true aks holda false qaytaramiz
}

module.exports = trouble;
