function countIdentical(arr) {
  // Your code here.
  let summ = 0 // bu yerga bir xil bo'lgan massivlarni sonini hislob boramiz
  arr.forEach(e => {  // arr ni forEach qilib har bir elementini tekshiramiz
    if(e.length > 1) {  // agar e ning uzunligi 1 dan katta bo'lsa
      const test = e.every(j => j === e[0]) // uni ham har bir elementini tekshiramiz
      if(test) {  // agar e - massiv ichidagi barcha elementlar bir xil bo'lsa
        summ ++ // summ ni 1 ga oshiramiz
      }
    } else { // agar e ning uzunligi 1 ga teng bo'lsa 
      summ ++ // summ ni 1 ga oshiramiz
    }
  })
  return summ // summ ni return qilamiz
}

module.exports = countIdentical;
