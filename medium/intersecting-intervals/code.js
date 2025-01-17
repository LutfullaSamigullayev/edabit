function countOverlapping(intervals, point) {
  // Your code here.
  let count = 0 // bu yerda javoblarni qo'shib boramiz
  intervals.forEach(arr => {  // intervals ni forEach qilib har bir arr ni tekshiramiz
    if(arr[0] <= point && point <=arr[1]){ 
      // agar arr ning 0-elementi pointdan kichik bo'lsa va 1-elementi pointdan katta bo'lsa
      count++ // count ni 1 ga oshiramiz
    }
  })
  return count // count ni return qilamiz
}

module.exports = countOverlapping;
