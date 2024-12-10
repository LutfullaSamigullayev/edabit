function countPalindromes(num1, num2) {
  // Your code here.
  let count = 0 // bu yerda javoblarni qo'shib boramiz
  for(let i = num1; i <= num2; i++) { // num1 dan num2 gacha for qilamiz
    let numstr = i.toString() // har bir kelgan raqam ni string qilib olamiz
    if(numstr === numstr.split('').reverse().join('')) { 
      //numstrni split qilib bo'laklarga bo'lib uni teskarisiga aylantirib yana qo'shib qoyamiz
      count++ // o'sha string o'zining teskarisi bilan bir xil bo'lsa count ni 1 ga oshiramiz
    }
  }
  return count
}

module.exports = countPalindromes;
