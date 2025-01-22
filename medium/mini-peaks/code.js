function miniPeaks(arr) {
  // Your code here.
  return arr.filter((num, index, arr) => (
    index != 0 && index != arr.length-1 && num > arr[index - 1] && num > arr[index + 1]
    // arr ni filter qilib shartlarga mos kelganlarni return qilamiz
    // 1- va oxirgi elementlarni return qilmaymiz
    // num o'zidan oldingi va keyingi elementlardan katta bo'lishi kerak
    // shu shartlarni bajargan num larni return qilamiz
  ))
}

module.exports = miniPeaks;
