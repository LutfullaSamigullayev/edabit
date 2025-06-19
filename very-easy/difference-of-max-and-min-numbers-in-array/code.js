function differenceMaxMin(arr) {
  // Your code here.
  // Math.max ga arr ni yoyib uning uchidan kattasini olamiz
  // va Math.mim ga ham arr ni yoyib uning uchidan kichikini olamiz
  // va ular o'rtasidagi farqni return qilamiz
  return Math.max(...arr) - Math.min(...arr)
}

module.exports = differenceMaxMin;
