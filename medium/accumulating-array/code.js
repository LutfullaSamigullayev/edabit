function accumulatingArray(arr) {
  // Your code here.
  let result = []     // oldin javoblarni push qilib borish uchun massiv ochamiz
  let sum = 0         // va yig'indilarni qo'shib borish uchun o'zgaruvchi ochamiz
  arr.map((num) => {  // har bir itemni map qilamiz
    sum += num        // kelgan num ni yig'indiga qo'shib boramiz
    result.push(sum)  // yig'indilarni push qilib boramiz
  })
  return result       //
}

module.exports = accumulatingArray;
