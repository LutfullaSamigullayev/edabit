function countOnes(i) {
  // Your code here.
  let binary = i.toString(2) // oldin kelgan raqanmi 2-lik sanoq sistemasiga o'tkazamiz
  let res = binary.split('').filter((num) => +num === 1)
  //keyin uni bo'laklarga bo'lib filter qilib faqat 1 ga tenglarni olamiz
  return res.length // keyin 1 larning uzunligini chiqaramiz
}

module.exports = countOnes;
