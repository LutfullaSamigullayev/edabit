function mergeArrays(a, b) {
  // Your code here.
  let long = 0 // bu yerda eng katta massivning uzunligini saqlaymiz
  let res = []  // bu  yerga javoblarni saqlab boramiz
  if(a.length > b.length) { // agar a ning uzunligi b ning uzunligidan katta bo'lsa
    long = a.length // long ni a ning uzunligiga tenglaymiz
  } else {  // aks holda
    long = b.length // long ni b ning uzunligiga tenglaymiz
  } // long bo'yicha for qilamiz
  for(let i = 0; i < long; i++){  
    if(a[i] != undefined) { // agar a[i] joyida element bo'lsa
      res.push(a[i])  // uni res ga push qilamiz
    }
    if(b[i] != undefined) { // agar b[i] joyida element bo'lsa
      res.push(b[i])  // uni res ga push qilamiz
    }
  }
return res // res ni return qilamiz
}

module.exports = mergeArrays;
