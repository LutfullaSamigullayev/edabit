function countAdverbs(sentence) {
  // Your code here.
  let adverbs = 0 // bu yerda qo'shimchasi bor so'zlarni sonini hisoblab boramiz
  sentence.split(' ').forEach(word => { 
    // keyin matn ni split qilb bo'sh joylar orqali bo'laklarga bo'lib  forEach qilamiz
    if(word.slice(-1) === ',' || word.slice(-1) === '.') {
      // agar word ning oxirida nuqta yoki vergul bo'lsa uni olib tashlaymiz
      word = word.slice(0, -1)
    }
    word.slice(-2) === 'ly' && adverbs++ 
    // keyin so'zning oxirgi 2 ta harfi ly ga teng bo'lsa adverbs ni 1 ga oshiramiz
  })
  return adverbs // adverbsni return qilamiz
}

module.exports = countAdverbs;
