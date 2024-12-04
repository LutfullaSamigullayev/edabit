function testFairness(agatha, bertha) {
  // Your code here.
    
  function result(arr) { // yigindini hisoblab beruvchi bir funksiya yaratamiz
    let sum = 0 // yigindini qo'shib borish ucun sum o'zgaruvchi ochamiz
    arr.forEach((inArr) => { // promt dan kelgan arr ni forEach qilib har bir kelgan inArr ustida amal bajaramiz
      sum += inArr.reduce((a,b) => a*b) // inArr ni ham reduce qilib ichidagi sonlarni qo'shib
    }) // sumga yig'ib boramiz
    return sum // keyin sum ni return qilamiz
  }
  // agar agatha va bertha ning sonlar yig'indisi teng bo'lsa true qaytaramiz aks holda false
  return result(agatha) === result(bertha) 
}

module.exports = testFairness;
