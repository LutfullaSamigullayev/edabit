function bridgeShuffle(arr1, arr2) {
  // Your code here.
  const res = [] // bu yerga natijalarni push qilib boramiz

  while(arr1.length > 0 || arr2.length > 0) {
    // arr1 va arr2 lar bo'shaguncha sikl aylantiramiz
    if(arr1.length) { // agar arr1 ning uzunligi bo'lsa
      res.push(arr1.shift()) // undagi birinchi element ni res ga o'tiramiz
    }
    if(arr2.length) { // agar arr1 ning uzunligi bo'lsa
      res.push(arr2.shift()) // undagi birinchi element ni res ga o'tiramiz
    }
  }

  return res // res ni return qilamiz
}

module.exports = bridgeShuffle;
