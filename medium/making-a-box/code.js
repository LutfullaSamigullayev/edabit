function makeBox(n) {
  // Your code here.
  let res = [] // bu yerga natijalarni push qilib boramiz
  for(let i = 1; i <= n; i++) { // n gacha for qilamiz
    if(i === 1 || i === n) {  // agar i=1 va i oxirgi element bo'lsa
      res.push("#".repeat(n)) // # ni n gacha takror qilib qo'shamiz
    } else {  // aks holda boshiga va oxiriga # qo'yib o'rtasini bo'sh joy qilib
      res.push(`#${" ".repeat(n-2)}#`) // res ga push qilamiz
    }
  }
  return res // res ni retur qilamiz
}

module.exports = makeBox;
