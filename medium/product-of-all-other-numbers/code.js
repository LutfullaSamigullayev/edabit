function getProducts(arr) {
  // Your code here.
<<<<<<< HEAD
  return arr.map((_, index, array) => { 
    // map orqali arr ni indexi bo'yicha tekshirib chiqamiz
    return array.reduce((acc, num, i) => {
      // reduce orqali array ni hisoblashni boshlaymiz
      if(i !== index) { // agar index i bilan i bir xil bo'lmasa
        acc *= num // acc ni num ga ko'paytiramiz
      } // agar index i bilan i bir xil bo'lsa uni qoldirib ketamiz
      return acc //acc ni return qilamiz
    }, 1) // reduce ni boshlang'ich qiymati 1
  }) // map ni qaytarib beramiz
=======
  
  return arr.map((_, index, array) => {
    return array.reduce((acc, num, i) => {
      if(i !== index) {
        acc *= num
      }
      return acc
    }, 1)
  })
>>>>>>> 21650372431bb54bfed76a1e556411e111302ef4
}

module.exports = getProducts;
