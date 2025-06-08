function AlphabetSoup(str) {
  // Your code here.
  return str.split('').sort().join('');
  // split() metodi satrni bolaklarga bo'lib arrayga aylantiradi
  // sort() metodi arrayni tartiblab chiqadi
  // join() metodi arrayni  elementlarini bir qatorga yig'adi va string qilib qaytaradi
}

module.exports = AlphabetSoup;
