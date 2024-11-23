function alliterationCorrect(sentence) {
  // Your code here.
  const word = sentence.charAt(0).toLowerCase() 
  // oldin bosh harfni topib olamiz
  const newarr = sentence.split(' ').filter((item) => item.length > 3) 
  // so'zning uzunligi 3 kattalarini filterlab o'tamiz
  const arr2 = newarr.filter((e) => (e.charAt(0).toLowerCase() === word))
  // hosil bo'lgan arraydan bsh harfi word ga tegnalarini filtrlab olamiz 
  return arr2.length === newarr.length
  // keyin oldingi array bn keyingi arrayni uzunliki tekshiramiz
}

console.log(alliterationCorrect('She swam to the shore.'))

module.exports = alliterationCorrect;
