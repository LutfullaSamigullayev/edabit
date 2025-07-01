function getExtension(arr) {
  // Your code here.
  return arr.map(word => word.split('.')[1])
  // arr ni map qilib har bir kelgan word ni split metodi bilan
  // '.'-nuqta bo'yicha bo'lakga ajaratamiz
  // va 1-indexdagi matn ni return qilamiz
}

module.exports = getExtension;
