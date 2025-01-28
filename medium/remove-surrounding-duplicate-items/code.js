function uniqueInOrder(sequence) {
  // Your code here.
  const res = [] // bu yerga javoblarni saqlab boramiz
  for(let i = 0; i < sequence.length; i++) {
    // sequence nign uzunligi bo'yicha for qilib chiqamiz
    if(res[res.length - 1] !== sequence[i]) { 
      // agar kelgan element res ning so'ngi elementiga teng bo'lmasa
      res.push(sequence[i]) // uni res ga push qilamiz
    }
  }
  return res // res ni return qilamiz
}

module.exports = uniqueInOrder;
