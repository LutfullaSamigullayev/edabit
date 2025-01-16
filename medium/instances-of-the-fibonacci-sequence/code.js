function fibSeq(end) {
  // Your code here.
  let res = [] // bu yerga javoblarni push qilib boramiz
  if(end === 0) { // agar end 0 ga teng bo'lsa bo'sh massiv qaytaramiz
    return res  
  }
  if(!end) { // agar end da hechnima bo'lmasa undefined qaytaramiz
    return undefined
  }
  for(let i = 0; i < end; i++) {  // end bo'yicha for qilamiz
    if(i === 0) { // agar i=0 bo'lsa 
      res.push(i) // res ga 0 ni push qilamiz
    } else if(i === 1) {  // agar i=1 bo'lsa 
      res.push(res[0]+i)  // res ga o'zidan oldingi elementga 1 ni qo'shib push qilamiz
    } else {  // qolgan vaziyatlarda res ning so'ngi elementi bilan undan oldingi elementni qo'shib 
      res.push(res[i-2] + res[i-1]) // res ga push qilamiz
    }
  }
  return res // res ni return qilamiz
}

module.exports = fibSeq;
