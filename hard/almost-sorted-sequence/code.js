function almostSorted(arr) {
  // Your code here.
  let decreasing = 0 // kamayuvchilarni hisoblab boramiz
  let increasing = 0 // ko'payuvchilarni hisoblab boramiz
  arr.forEach((num, i, arr) => { 
    // arr ni forEach qilib o'zidan oldingi element bilan solishtirib chiqamiz
    if (num > arr[i + 1]) { 
      // agar num o'zidan oldingi elementdan katta bo'lsa
      decreasing++ // decreasing ni 1 ga oshiramiz
    } else if (num < arr[i + 1]) {
       // agar num o'zidan oldingi elementdan kichik bo'lsa
      increasing++ // increasing ni 1 ga oshiramiz
    }
  }) // decreasing yoki increasing 1 ga teng bo'lsa true qaytaramiz
  return decreasing === 1 || increasing === 1 
}

module.exports = almostSorted;
