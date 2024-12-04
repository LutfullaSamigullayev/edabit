function makeTitle(str) {
  // Your code here.
  let arr = str.split(' ') // oldin str ni bo'laklarga bo'lib olamiz
  let newarr = [] // bu yerga javobni push qilib boramiz
  arr.map((e) => {  // bo'laklarga bo'lingan so'zlar ustida amallar bajaramiz
    newarr.push(e[0].toUpperCase()+e.slice(1))  // har bir so'zning 0 indexdagisini katta qilib keyin qolgan 1-indexdan boshlab qolgan so'zlarni qo'shib 
  })  // newarr ga push qilib boramiz
  let res = newarr.join(' ')  // keyin newarr ni join qilib string ga o'zgartiramiz
  return res
}

module.exports = makeTitle;
