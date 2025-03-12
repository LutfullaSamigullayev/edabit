function breakPoint(num) {
  // Your code here.
  let start = 0 // bu yerga boshidagi raqamlar yigindisini qo'shib boramiz
  let end = 0 // bu yerga oxiridagi raqamlar yigindisini qo'shib boramiz
  let arr = num.toString().split('') // raqamni stringga aylantirib
  // bo'laklarga bo'lamiz va arr o'zgaruvchiga saqlab qo'yamiz
  while(arr.length > 0) { // arr bo'shaguncha sikl aylantiramiz
    if(start === 0 || start < end) { // agar start 0 ga teng bo'lsa 
      // yoki start end dan kichik bo'lsa
      start += Number(arr.shift()) // start ga arr ning boshidagi raqamni qo'shamiz
    } else { // aks holda end start dan kichik bo'lsa
      end += Number(arr.pop()) // end ga arr ning oxiridagi raqamni qo'shamiz
    }
  }
  return start === end // start va end ning teklikini return qilamiz
}

module.exports = breakPoint;
