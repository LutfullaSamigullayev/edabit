function progressDays(runs) {
  // Your code here.
  let progress = 0  // bu yerda o'sish bo'lgan kunlar sonini hisoblab boramiz
  runs.forEach((num, index, arr) => { // runs ni forEach qilib tekshiramiz
    if(index != 0 && num > arr[index-1]) {  
      // agar 0-index bo'lmasa va num o'zidan oldingi num dan katta bo'lsa
      progress ++ // progress ni 1 ga oshiramiz
    }
  })
  return progress // progress ni return qilamiz
}

module.exports = progressDays;
