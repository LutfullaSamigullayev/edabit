function removeSpecialCharacters(str) {
  // Your code here.
  const regex = /[!@#$%^&\\\*\(\)\[\]{}<>\+=,`~|\.\?]/g;
  // bu regexda simvollarni joylashtiramiz
  return str.replace(regex, ''); // replece orqali simvollarni o'chiramiz
} // va return qilib qaytarib beramiz

module.exports = removeSpecialCharacters;
