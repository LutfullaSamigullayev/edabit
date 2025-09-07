function transform(arr) {
  // Your code here.
  // arr ni map orqali aylanib juftlarni 1 ga kamaytirib 
  // toqlarni 1 ga oshirib yangi arrayni return qilamiz
  return arr.map(num => num % 2 === 0 ? num - 1 : num + 1);
}

module.exports = transform;
