function capMe(arr) {
  // Your code here.
  let res = [] // bu yerga javoblarni push qilib boramiz
  arr.map((e) => { // keyim arr ni map qilib har bir elementning 0-indexini katta harf qilamiz
    res.push(e[0].toUpperCase()+e.slice(1).toLowerCase()) // va qolgan harflarni kichik harf qilib
  })  // ikkalasini qo'shib bitta satr qilib res ga push qilib boramiz
  return res  // keyin res ni return qilamiz
}

module.exports = capMe;
