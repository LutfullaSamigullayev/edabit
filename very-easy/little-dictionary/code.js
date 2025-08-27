function dictionary(initial, words) {
  // Your code here.
  // words ni filter qilib startsWith orqali 
  // boshlang'ich qismi bilan filterlab olamiz
  // filter o'zi yangi array qaytaradi 
  // shuni return qilamiz
  return words.filter(word => word.startsWith(initial))
}

module.exports = dictionary;
