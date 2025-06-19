function noOdds(arr) {
  // Your code here.
  // arr ni filter qilib har bir raqamni 2 bo'lganda qoldiq 0 bo'lsa
  // demak u juft raqam, filter faqat shularni yangi arrayga o'tkazadi
  return arr.filter(num => num % 2 == 0)
}

module.exports = noOdds;
