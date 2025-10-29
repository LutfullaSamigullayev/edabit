function mysteryFunc(arr, num) {
  // Your code here.
  // arr ni map qilib har bir sonni num ga qoldiqli bo'lib
  // uning qoldiqlarini array qilib return qilamiz
  return arr.map(e => e % num)
}

module.exports = mysteryFunc;
