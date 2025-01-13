function grabCity(str) {
  // Your code here.
  let word = '' // bu yerga so'ngi massiv [] ichidagi so'zni saqlaymiz
  let open = false  // agar true bo'lsa so'zni saqlashni boshlaymiz 
  str.split('').forEach(e => { // strni split qilib forEach qilib tekshirib chiqamiz
    if(e === '[') { // agar kelgan element '[' bo'lsa 
      open = true   // open true qilamiz 
      word = '' // va wordni tozlaymiz 
    } else if (e === ']') { // agar kelgan element ']' bo'lsa 
      open = false // open false qilamiz 
    } else if (open) { // agar open true bo'lsa demak so'zni saqlash mumkin
      word += e // shuning uchun kelgan elementni word ga saqlab boshlaymiz
    } // toki open false bo'lgunicha
  })
  return word // keyin wordni return qilamiz
}

module.exports = grabCity;
