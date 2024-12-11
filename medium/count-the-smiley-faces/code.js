function countSmileys(arr) {
  // Your code here.
  let smiles = 0 // bu yerda smile larni saqlab boramiz
  arr.forEach(smile => {  // keyin arr ni forEach qilib har smile larni tekshirib chiqamiz
    let face = 0  // bu yerda ko'z burun va og'izlar barchasi shartga mos kelganligini hisoblab boramiz
    if(smile[0] === ":" || smile[0] === ";") { 
      face++ // agar ko'z shu shartlarga to'g'ri kelsa faceni 1 ga oshiramiz
    }
    if(smile.length === 3 && smile[1] === '-' || smile[1] === '~') {
      face++ // agar burun bo'lsa va shu shartlarga to'g'ri kelsa faceni 1 ga oshiramiz
    }
    if(smile[smile.length-1] === ')' || smile[smile.length-1] === 'D') {
      face++ // agar og'iz shu shartlarga to'g'ri kelsa faceni 1 ga oshiramiz
    }
    face === smile.length && smiles++; // face ya smile uzunligi mos kelsa smiles ni 1 ga oshiramiz
  })
  return smiles // keyin smiles ni return qilamiz
}


module.exports = countSmileys;
