function reverse(str) {
  // Your code here.
  // str ni split('') bilan bo'laklarga bo'lib array qilamiz
  // hosil bo'lgan arrayni reverse() metodi orqali teskari qilamiz
  // hosil bo'lgan teskari arrayni join('') orqalli birlashtiramiz
  // hosil bo'lgan stringni return qilamiz
  return str.split('').reverse().join('')
}

module.exports = reverse;
