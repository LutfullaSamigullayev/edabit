function retrieve(str) {
  // Your code here.
  const vowel = 'aeiou' // unli harflar
  const res = []
  str.toLowerCase().split(' ').forEach(word => {
    // str ni kichik harflarga aylantirib so'zlarga bo'lib tekshirib chiqamiz
    if(vowel.includes(word[0])) { 
      // agar so'zning birinchi harfi unli bo'lsa
      console.log(word)
      res.push(word.replace(/\./g, ""))
      // replaceda regex orqali satrning oxirida-($) joylashgan nuqtani-(\.) qidiradi.
    } // javobni res ga push qilamiz
  }
)
  return res // res ni return qilamiz
}

console.log(retrieve("Exercising is a healthy way to burn off energy."))
module.exports = retrieve;
