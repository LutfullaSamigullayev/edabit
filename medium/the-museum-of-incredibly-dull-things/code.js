function removeSmallest(arr) {
  // Your code here.
  const min = Math.min(...arr) 
  // Math.min orqali arr ichidagi eng kichigini topamiz
  const minIndex = arr.findIndex(num => num === min)
  // findIndex orqali birinchi duch kelgan eng kichik raqamni indexini qaytaramiz
  arr.splice(minIndex, 1) 
  // va slpice orqali o'sha indexda joylashgan elementni ochirib arr ni o'zgartiramiz
  return arr // o'zgargan arrayni return qilamiz
}

module.exports = removeSmallest;
