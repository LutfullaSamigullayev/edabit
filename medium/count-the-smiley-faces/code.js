function countSmileys(arr) {
  // Your code here.
  let smiles = 0
  arr.forEach(smile => {
    let face = 0
    if(smile[0] === ":" || smile[0] === ";") {
      face++
    }
    if(smile.length === 3 && smile[1] === '-' || smile[1] === '~') {
      face++
    }
    if(smile[smile.length-1] === ')' || smile[smile.length-1] === 'D') {
      face++
    }
    face === smile.length && smiles++;
  })
  return smiles
}


module.exports = countSmileys;
