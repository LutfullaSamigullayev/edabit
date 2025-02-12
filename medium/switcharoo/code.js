function flipEndChars(str) {
  // Your code here.
  if(str.length < 2 || typeof str !== "string") {
    // agar str ning uzunligi 2 dan kichik bo'lsa yoki u string bo'lmasa
    return "Incompatible." // mos kelmaydigan deb return qilamiz
  }

  const start = str[0] // birinchi elementni olamiz
  const end = str[str.length - 1] // oxirgi elementni olamiz

  if(start === end) { // va ikkalasini solishtiramiz ular bir xil bo'lsa
    return "Two's a pair." // ikkalasi bir xil deb return qilamiz
  } else { // aks holda birinchi va oxirgi element ni o'rnini almashtiramiz
    return end + str.slice(1, str.length - 1) + start
  }
}

module.exports = flipEndChars;
