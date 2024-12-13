function digitDistance(num1, num2) {
  // Your code here.
  let summ = 0 // bu yerga yigindilarni hisoblab boramiz
  const arr1 = num1.toString().split('')  // raqamni string qilib
  const arr2 = num2.toString().split('')  // raqamlarni bo'laklarga bo'lib arr qilamiz
                                          
  for(let i = 0; i < arr1.length; i++) {
    // har bir sonni indexi bo'yicha olib uni number qilib, ayirib, musbat son qilib, summga qo'shib boramiz
    summ += Math.abs(+arr1[i] - (+arr2[i]))
  }
  return summ // summ ni return qilamiz
}

module.exports = digitDistance;
