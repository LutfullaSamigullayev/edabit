function pairs(arr) {
  // Your code here.
  const res = [] // bu yerga javoblarni push qilib boramiz
  while (arr.length !== 0) { // arr bo'sh bo'lguncha uning ustida amal bajaramiz
    if(arr.length === 1) { // agar arr ning ichida 1 ta element qolgan bo'lsa
      let num = arr.pop()  // uni num ga o'zlashtiramiz
      res.push([num, num]) // va num ni ikkita qilib res ga push qilamiz
    } else { // aks holda agar arr ning ichida 2 ta yoki undan ko'p element qolgan bo'lsa
      res.push([arr.shift(), arr.pop()]) 
    } // arr ning boshidan va oxiridan elementlarni olib res ga push qilamiz
  } // bu jarayonni arr bo'sh bo'lguncha davom ettiramiz
  return res // va res ni qaytarib beramiz
}

module.exports = pairs;
