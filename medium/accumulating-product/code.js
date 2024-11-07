function accumulatingProduct(arr) {
  // Your code here.
  let result = []     // oldin javoblarni push qilib borish uchun massiv ochamiz
  let sum = 1         // va sonlarni ko'paytirib borish uchun o'zgaruvchi ochamiz
  arr.map((num) => {  // har bir itemni map qilamiz
    sum *= num        // kelgan num ni sum ko'paytirib boramiz
    result.push(sum)  // ko'paytmani push qilib boramiz
  })
  return result       //
}

module.exports = accumulatingProduct;
