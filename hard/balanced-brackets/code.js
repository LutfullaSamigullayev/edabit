function isBalanced(str) {
  // Your code here.
  if(!str) return undefined // agar str berilmasa undefined ni return qilamiz

  const bracket = [] // bu yerga ochilgan qavslarni push qilib boramiz
  const res = str.split('').every(e => { // str ni bo'lakalarga bo'lib tekshirib chiqamiz
    if(e == '(' || e == '[' || e == '{') { // agar qavslar ochiluvchi bo'lsa
      bracket.push(e) // ularni bracket ga push qilamiz
      return true // va true ni return qilamiz
    } else if(e == ')' && bracket[bracket.length - 1] == '(') { 
      // agar u yopiluvchi qavs bo'lsa va bracketning so'ngi elementi unga mos kelsa
      bracket.pop() // uni bracketdan olib tashlaymiz va 
      return true // trueni return qilamiz shunday qilib barcha qavslarni tekshirib chiqamiz
    } else if(e == ']' && bracket[bracket.length - 1] == '[') {
      bracket.pop()
      return true
    } else if(e == '}' && bracket[bracket.length - 1] == '{') {
      bracket.pop()
      return true
    } else return false // agar e bracket ning so'ngi elementiga mos kelmasa 
  }) // false ni return qilamiz va shu yerda every o'z ishini to'xtatadi va natijani res ga yuboradi

  return !bracket.length ? res : false // agar bracket bo'sh bo'lsa res ni return qilamiz
  // aks holda false ni return qiladi
}

module.exports = isBalanced;
