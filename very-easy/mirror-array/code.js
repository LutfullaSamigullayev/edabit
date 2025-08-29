function mirror(arr) {
  // Your code here.
  // arr oxirgi elementini qoldirib
  // nusxalab uni teskari aylantirib 
  // arr ga qo'shamiz va return qilamiz
  return arr.concat(arr.slice(0, -1).reverse())
}

module.exports = mirror;
