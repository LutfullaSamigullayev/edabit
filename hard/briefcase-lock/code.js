function minTurns(current, target) {
  // Your code here.
  const currentArray = current.toString().split('')
  // current ni stringga aylantirib bo'laklarga bo'lamiz
  const targetArray = target.toString().split('')
  // target ni stringga aylantirib bo'laklarga bo'lamiz
  const res = currentArray.map((num, index) => {
    // currentArrayni map qilib oldinga va orqaga sanab chiqamiz
    const forward = (targetArray[index] - num + 10) % 10
    const backward = (num - targetArray[index] + 10) % 10
     return [forward, backward] 
  }) // va javoblarni bir array qilib return qilamiz
  let summ = 0 // bu yerga min bo'lgan qadamlarni qo'shib boramiz
  res.forEach(arr => summ += Math.min(...arr))
  // Math.min orqali arr ichidagi min larni olib summ ga qo'shamiz
  return summ // va summ ni return qilamiz
}

module.exports = minTurns;
