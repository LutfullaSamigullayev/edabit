function sortByLast(str) {
  // Your code here.
  const arr = str.split(' ') // matnni so'zlarga bo'lamiz
  const res = arr.sort((a, b) => {
    let lastA = a[a.length - 1]; // a ning oxirgi harfi
    let lastB = b[b.length - 1]; // b ning oxirgi harfi
    return lastA.localeCompare(lastB); 
    // localeCompare harflarni alfavit bo‘yicha solishtiradi
  }); // hosil bo'lgan arrayni string ga aylantiramiz va return qilamiz
  return res.join(' ') 
}

module.exports = sortByLast;
