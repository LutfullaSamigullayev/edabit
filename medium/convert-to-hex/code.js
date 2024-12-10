function toHex(str) {
  // Your code here.
  let res = '' // javoblarni saqlab borish uchun bo'sh string ochib qo'yamiz
  for(let i = 0; i < str.length; i++) { 
    // keyin for qilib str ni har bir elenenti ustida amal bajaramiz
    res += str.charCodeAt(i).toString(16) + ' ' 
    // charCodeAt orqali o'sha indexda turgan elementni codini olib keyin 
    // uni toString(16) orqali 16-lik sanoq sistemasiga o'tkazamiz 
    // va bo'sh joy bilan res ga qo'shib boramiz
  }
  return res.trimEnd() // va  oxida qo'shib yuborgan bo'sh joyimizni olib tashlaymiz 
}

console.log(toHex("hello world"))
module.exports = toHex;
