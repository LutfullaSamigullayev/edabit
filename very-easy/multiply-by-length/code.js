function MultiplyByLength(arr) {
  // Your code here.
  // arr ni map orqali aylaning 
  // har bir sonni uning uzunligiga ko'paytiramiz
  // yangi arrayni return qilamiz
  return arr.map(num => num * arr.length)
}

module.exports = MultiplyByLength;
