function toHex(str) {
  // Your code here.
  let res = ''
  for(let i = 0; i < str.length; i++) {
    res += str.charCodeAt(i).toString(16) + ' '
  }
  return res.trimEnd()
}

console.log(toHex("hello world"))
module.exports = toHex;
