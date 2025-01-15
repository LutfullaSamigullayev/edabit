function initialize(names) {
  // Your code here.
  let res = [] // bu yerga javoblarni push qilib boramiz
  names.forEach(word => { // names ni forEach qilib name larni olamiz
    let letter = '' // bu yerda katta harflarni saqlaymiz
    word.split(' ').forEach(e => { // keyin o'sha name larning tekshiramiz
      letter += e[0].toUpperCase() + '. '  // e ning bosh harfini letterga qo'shamiz 
    }); //  '.' nuqta bilan birga
    res.push(letter.trimEnd()) // letterni trim qilib oxiridagi bo'sh joyni olib res ga push qilamiz
    letter = '' // letter ni tozalab qo'yamiz
  })
  return res // res ni return qilamiz
}

module.exports = initialize;
