function getProducts(arr) {
  // Your code here.
  
  return arr.map((_, index, array) => {
    return array.reduce((acc, num, i) => {
      if(i !== index) {
        acc *= num
      }
      return acc
    }, 1)
  })
}

module.exports = getProducts;
