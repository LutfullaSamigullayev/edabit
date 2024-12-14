function chunkify(arr, size) {
  // Your code here.
  let newarr = [] // bu yerda asosiy javoblarni saqlab boramiz
  let summ = [] // bu yerda size bo'yicha arr larni yig'ib boramiz
  for(let item of arr) {  // arr for qiib 
    summ.push(item)       // summ ga push qilib boramiz
    if(summ.length === size) {  // agar summ length size ga teng bo'lsa
      newarr.push(summ)         // uni newarr ga push qilib 
      summ = []                 // uni bo'sh arr qilib qo'yamiz
    }
  }
  if(summ.length !== 0) {     // agar for ishini tugatgandan keyin summ bo'sh bo'lmasa
    newarr.push(summ)       // uni newarr ga push qilib ketamiz
  }
  return newarr      // oxirida newwarr ni return qilamiz
}

module.exports = chunkify;
