function checkPerfect(num) {
  // Your code here.
  let sum = 0; // bu yerda javoblarni qo'shib boramiz
  for (let i = 1; i <= num / 2; i++) {  // bu yerda numning yarim qismiga qarab chiqamiz
    if (num % i === 0) {  // agar num i ga bo'linadigan bo'lsa
      sum += i; // sum ga qo'shib boramiz
    } 
  } 
  return sum === num; // agar sum numga teng bo'lsa true qaytaradi

}

module.exports = checkPerfect;
