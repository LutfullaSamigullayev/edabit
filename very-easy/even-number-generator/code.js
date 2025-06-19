function findEvenNums(num) {
  // Your code here.
  let evens = []
  // bu yerga juft sonlarni push qilib boramiz

  // for ni 2 dan sanab boshlaymiz va uni evens ga push qilib boramiz
  // va siklni 2 ga oshirib boramiz shunda faqat juft sonlar bo'ladi
  for(let i = 2; i <= num; i += 2) {
    evens.push(i)
  }

  // array ni return qilamiz
  return evens
}

module.exports = findEvenNums;
