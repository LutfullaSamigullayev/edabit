function boundSort(arr, bounds) {
  // Your code here.
  const sorted = arr.slice(bounds[0], bounds[1] + 1).sort()
  // arr ni berilgan o'lchamda kesib olib uni sortlaymiz va sortedga o'zlashtiramiz
  const arrSorted = arr.sort().slice(bounds[0], bounds[1] + 1) 
  // arr ni to'liq o'zini so'rtlaymiz va berilgan o'lcham bo'yicha kesib olib
  // arrSorted ga o'zlashtiramiz
  // arraylarni so'lishtiramiz agar bir xil bo'lsa true aks holda false return qilamiz
  return arrSorted.every((num, index) => num === sorted[index])
}

module.exports = boundSort;
