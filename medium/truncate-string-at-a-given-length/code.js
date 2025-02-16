function truncate(string, length) {
  // Your code here.
  const newStr = string.slice(0,length).split(' ') 
  // oldin berilgan uzunlik bo'yicha satrni qirqib olib uni so'zlarga bo'lib qo'yamiz
  const arr = string.split(' ') // string ni ham so'zlarga bo'lib qo'yamiz
  const res = newStr.filter(word => arr.includes(word)) 
  // bo'lingan satrni ichida so'zlarni to'liqlarini asosoiy satrdan qarab filtrlab o'tiramiz
  return res.join(' ') // va javobni birlashtirib satr qilib return qilamiz
}

module.exports = truncate;
