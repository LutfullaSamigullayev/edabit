function calculateScores(str) {
  // Your code here.
  let Andy = 0        // Andy ni yutuqlari
  let Ben = 0         // Ben ni yutuqlari
  let Charlotte = 0   // Charlotte ni yutuqlari
  str.split('').forEach(word => { 
    // str ni split qilib bo'laklarga bo'lib forEach qilib tekshirib chiqamiz
    if(word === 'A') {        // agar word A ga teng bo'lsa
      Andy ++                 // Andy ni hisobini 1 ga oshiramiz
    } else if(word === 'B') { // agar word B ga teng bo'lsa
      Ben ++                  // Ben ni hisobini 1 ga oshiramiz
    } else if(word === 'C') { // agar word C ga teng bo'lsa
      Charlotte ++            // Charlotte ni hisobini 1 ga oshiramiz
    }
  })        // va uchalasini yutuqlarini array ko'rinishida return qilamiz
  return [Andy, Ben, Charlotte] 
}

module.exports = calculateScores;
