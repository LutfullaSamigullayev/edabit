function getProducts(arr) {
  // Your code here.
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
}

module.exports = getProducts;
