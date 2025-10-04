function repeat(str, n) {
  // Your code here.
  // split → harflarga ajratamiz
  // map → har birini n marta takrorlaymiz
  // join → qayta stringga yig‘amiz
  return str.split("").map(ch => ch.repeat(n)).join("");
}

module.exports = repeat;
