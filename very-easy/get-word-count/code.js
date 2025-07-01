function countWords(str) {
  // Your code here.
  // split metodi bilan ' '-bo'sh jaylar orqali bo'laklarga bo'lamiz
  // va hosil bo'lgan arrayning length orqali 
  // ichida qancha so'z bo'rligini return qilamiz
  
  return str.split(' ').length
}

module.exports = countWords;
