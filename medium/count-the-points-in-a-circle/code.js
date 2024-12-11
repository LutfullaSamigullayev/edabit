function pointsInCircle(points, centerX, centerY, radius) {
  // Your code here.
  let res = 0 // bu yerga javoblarni saqlab boramiz
  points.forEach(point =>  { // keyin points ni forEach qilib har birini formulaga qo'yib chiqamiz
    (point.x - centerX)**2 + (point.y - centerY)**2 < radius**2 ? res++ : null
    // agar formula sharti bajarilsa res ni 1 ga oshiramiz aks holda hechnima qilmaymiz
  }) // keyin res ni return qilamiz
  return res
}

console.log(pointsInCircle([
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 5 },
  { x: 10, y: 10 }
], 0, 0, 5))
module.exports = pointsInCircle;
