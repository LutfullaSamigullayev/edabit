function flatten(arr) {
  // Your code here.
  const res = [] // bu yerga javob ni saqlab boramiz
  arr.forEach(item => item.forEach(item => res.push(item)))
  // arr.ni for qilib uni ichidagi arr ni ham for har birini res ga push qilib chiqamiz
  return res  // res ni return qilamiz
}

module.exports = flatten;
