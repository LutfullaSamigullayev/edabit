function wave(str) {
  // Your code here.
  let res = [] // bu yerga javoblarni push qilib boramiz
  for(let i = 0; i < str.length; i++) { // str ning uzunligi bo'yicha for qilamiz
    if(str[i].toUpperCase() != str[i]) {  
      // agar harf ni katta qilganda asl holidan o'zgargan bo'lsa u harf bo'ladi
      let start = str.slice(0,i) // strni boshlang'ich qismini olamiz
      let word = str[i].toUpperCase() // harfni katta qilamiz
      let end = str.slice(i+1) // strni oxirgi qismini olamiz
      res.push(start + word + end) // va 3 tasini qo'shib res ga push qilamiz
    }
  }
return res // res ni return qilamiz
}

module.exports = wave;
