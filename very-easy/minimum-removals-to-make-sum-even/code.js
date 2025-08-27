function minimumRemovals(arr) {
  // Your code here.
  // oldim arr ichidagi elementlarni barchasini qo'shamiz
  const summ = arr.reduce((a,b) => a+b)
  // summ juft bo'lsa 0 ni return qilamiz
  if(summ % 2 == 0) return 0
  // aks holda 1 ni return qilamiz
  // (yani 1 ta elementni olib tashlash kerak)
  return 1
}

module.exports = minimumRemovals;
