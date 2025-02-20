function XO(str) {
  // Your code here.
  let x = 0 // bu yerga x larni sonini hisoblab boramiz
  let o = 0 // bu yerga esa o larni sonini hisoblab boramiz
  str.split('').forEach(word => { // str ni bo'laklarga bo'lib tekshirib chiqamiz
    if(word.toLowerCase() === 'x') { // agar x ga teng bo'lsa 
      x++ // x ni 1 ga oshiramiz
    } else if(word.toLowerCase() === 'o') { // agar o ga teng bo'lsa 
      o++ // o ni 1 ga oshiramiz
    }
  })
  return x === o // ularni taqqoslab return qilamiz
}

module.exports = XO;
