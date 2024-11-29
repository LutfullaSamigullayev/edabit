function isAutomorphic(n) {
  // Your code here.
  const sum = n*n // oldin n ning kvadratini chiqarib olamiz
  return sum.toString().endsWith(n)
  // keyin javobni stringga o'girib endWith orqali oxiridan n ni qidiramiz
}

module.exports = isAutomorphic;

console.log(isAutomorphic(8))